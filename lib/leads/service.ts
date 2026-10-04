import "server-only";
import { randomUUID } from "node:crypto";
import { allowLead } from "./delivery";
import { leadAdapter } from "./adapters";
import type { Lead } from "./schema";
import { requestJson, IntegrationError } from "@/lib/server/http-client";
export async function acceptLead(
  lead: Lead,
  ip: string,
  requestId: string,
): Promise<"accepted" | "limited" | "captcha"> {
  if (!(await allowLead(ip))) return "limited";
  const body = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY!,
    response: lead.captchaToken,
    idempotency_key: randomUUID(),
  });
  const check = await requestJson<{
    success?: boolean;
    hostname?: string;
    action?: string;
  }>(
    new URL("https://challenges.cloudflare.com/turnstile/v0/siteverify"),
    { method: "POST", body },
    { idempotent: true, retries: 1 },
  );
  if (
    check.success !== true ||
    check.action !== "contact" ||
    check.hostname !== process.env.TURNSTILE_EXPECTED_HOSTNAME?.trim()
  )
    return "captcha";
  if (!lead.name || !lead.phone) throw new IntegrationError("response");
  const message = {
    name: lead.name,
    phone: lead.phone,
    topic: lead.topic,
    message: lead.message,
    consent: lead.consent,
  };
  await leadAdapter().deliver(message, requestId);
  return "accepted";
}
