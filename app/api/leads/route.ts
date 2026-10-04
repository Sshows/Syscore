import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { siteConfig } from "@/config/site";
import { experience } from "@/content/site-content";
import { leadSchema } from "@/lib/leads/schema";
import { leadDeliveryConfigured } from "@/lib/leads/config";
import { acceptLead } from "@/lib/leads/service";
import { IntegrationError } from "@/lib/server/http-client";
export const runtime = "nodejs";
const reply = (message: string, status: number) =>
  NextResponse.json(
    { message },
    { status, headers: { "Cache-Control": "no-store" } },
  );
export async function POST(request: NextRequest) {
  const requestId = randomUUID();
  const origin = request.headers.get("origin");
  const allowedOrigin =
    process.env.NODE_ENV === "development"
      ? request.nextUrl.origin
      : siteConfig.url;
  if (origin !== allowedOrigin) return reply(experience.contact.error, 403);
  if (
    !/^application\/json(?:\s*;|$)/i.test(
      request.headers.get("content-type") || "",
    )
  )
    return reply(experience.contact.invalid, 415);
  if (Number(request.headers.get("content-length") || 0) > 8192)
    return reply(experience.contact.invalid, 413);
  const reader = request.body?.getReader();
  if (!reader) return reply(experience.contact.invalid, 400);
  let size = 0;
  const chunks: Uint8Array[] = [];
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const timeout = new Promise<never>((_, reject) => {
      timer = setTimeout(() => {
        void reader.cancel();
        reject(new IntegrationError("timeout"));
      }, 5000);
    });
    const read = async () => {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > 8192) {
          await reader.cancel();
          return false;
        }
        chunks.push(value);
      }
      return true;
    };
    if (!(await Promise.race([read(), timeout])))
      return reply(experience.contact.invalid, 413);
    clearTimeout(timer);
    const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    const parsed = leadSchema.safeParse(input);
    if (!parsed.success) return reply(experience.contact.invalid, 400);
    if (parsed.data.website) return reply(experience.contact.success, 200);
    if (!leadDeliveryConfigured())
      return reply(experience.contact.unavailable, 503);
    // Vercel overwrites this header; self-hosted deployments must use a trusted reverse proxy.
    const ip =
      (process.env.VERCEL
        ? request.headers.get("x-vercel-forwarded-for")
        : process.env.TRUST_PROXY === "true"
          ? request.headers.get("x-forwarded-for")
          : null
      )
        ?.split(",")[0]
        .trim() || "unknown";
    const result = await acceptLead(parsed.data, ip, requestId);
    console.info(JSON.stringify({ event: "lead", requestId, outcome: result }));
    if (result === "limited")
      return reply(
        "Слишком много обращений. Попробуйте через 10 минут или позвоните.",
        429,
      );
    if (result === "captcha")
      return reply("Пройдите проверку защиты от спама ещё раз.", 400);
    return reply(experience.contact.success, 200);
  } catch (error) {
    if (error instanceof SyntaxError)
      return reply(experience.contact.invalid, 400);
    console.warn(
      JSON.stringify({
        event: "lead",
        requestId,
        outcome: "unavailable",
        reason: error instanceof IntegrationError ? error.code : "internal",
      }),
    );
    return reply(experience.contact.error, 503);
  } finally {
    clearTimeout(timer);
  }
}
