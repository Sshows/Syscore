import "server-only";
import { createHash } from "node:crypto";
import { experience } from "@/content/site-content";
import type { Lead } from "./schema";

export function leadDeliveryConfigured() {
  return Boolean(
    process.env.LEAD_INTAKE_APPROVED === "true" &&
    process.env.TELEGRAM_BOT_TOKEN?.trim() &&
    process.env.TELEGRAM_CHAT_ID?.trim() &&
    process.env.RATE_LIMIT_REDIS_URL?.trim() &&
    process.env.RATE_LIMIT_REDIS_TOKEN?.trim(),
  );
}

// Shared atomic limiter: do not use a process-local counter on serverless hosts.
export async function allowLead(ip: string) {
  const url = new URL(process.env.RATE_LIMIT_REDIS_URL!);
  if (url.protocol !== "https:") throw new Error("Rate limiter configuration");
  const key = `syscore:leads:${createHash("sha256").update(ip).digest("hex")}`;
  const script =
    "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],600) end; return n";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RATE_LIMIT_REDIS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["EVAL", script, "1", key]),
    signal: AbortSignal.timeout(5000),
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Rate limiter unavailable");
  const data = (await response.json()) as { result?: number; error?: string };
  if (data.error || typeof data.result !== "number")
    throw new Error("Rate limiter unavailable");
  return data.result <= 5;
}

export async function deliverLead(lead: Lead) {
  const topic = experience.directions.find(
    (item) => item.id === lead.topic,
  )?.title;
  const text = [
    "SYSCORE / Новое обращение",
    `Тема: ${topic}`,
    `Имя: ${lead.name}`,
    `Телефон: ${lead.phone}`,
    `Задача: ${lead.message || "Не указана"}`,
    "Согласие на обратную связь: да",
  ].join("\n");
  const response = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text }),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    },
  );
  if (!response.ok || !((await response.json()) as { ok?: boolean }).ok)
    throw new Error("Delivery unavailable");
}
