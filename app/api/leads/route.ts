import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { experience } from "@/content/site-content";
import { leadSchema } from "@/lib/leads/schema";
import {
  allowLead,
  deliverLead,
  leadDeliveryConfigured,
} from "@/lib/leads/delivery";
export const runtime = "nodejs";
const reply = (message: string, status: number) =>
  NextResponse.json(
    { message },
    { status, headers: { "Cache-Control": "no-store" } },
  );

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const allowedOrigin =
    process.env.NODE_ENV === "development"
      ? request.nextUrl.origin
      : siteConfig.url;
  if (origin !== allowedOrigin) return reply(experience.contact.error, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return reply(experience.contact.invalid, 415);
  if (Number(request.headers.get("content-length") || 0) > 8192)
    return reply(experience.contact.invalid, 413);
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply(experience.contact.invalid, 400);
    let size = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 8192) {
        await reader.cancel();
        return reply(experience.contact.invalid, 413);
      }
      chunks.push(value);
    }
    const parsed = leadSchema.safeParse(
      JSON.parse(Buffer.concat(chunks).toString("utf8")),
    );
    if (!parsed.success) return reply(experience.contact.invalid, 400);
    if (parsed.data.website) return reply(experience.contact.success, 200);
    if (!leadDeliveryConfigured())
      return reply(experience.contact.unavailable, 503);
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (!(await allowLead(ip)))
      return reply(
        "Слишком много обращений. Попробуйте через 10 минут или позвоните.",
        429,
      );
    await deliverLead(parsed.data);
    return reply(experience.contact.success, 200);
  } catch (error) {
    if (error instanceof SyntaxError)
      return reply(experience.contact.invalid, 400);
    // Never log request bodies, phone numbers, credentials or upstream URLs.
    return reply(experience.contact.error, 503);
  }
}
