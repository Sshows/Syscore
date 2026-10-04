import "server-only";
import { httpsEndpoint } from "@/lib/server/http-client";
const validHttps = (value: string | undefined) => {
  try {
    httpsEndpoint(value);
    return true;
  } catch {
    return false;
  }
};
export function leadDeliveryConfigured() {
  const e = process.env;
  const delivery = e.LEAD_DELIVERY || "telegram";
  const destination =
    delivery === "webhook"
      ? validHttps(e.LEAD_WEBHOOK_URL) && Boolean(e.LEAD_WEBHOOK_TOKEN?.trim())
      : delivery === "telegram" &&
        Boolean(e.TELEGRAM_BOT_TOKEN?.trim() && e.TELEGRAM_CHAT_ID?.trim());
  return Boolean(
    e.LEAD_INTAKE_APPROVED === "true" &&
    destination &&
    validHttps(e.RATE_LIMIT_REDIS_URL) &&
    e.RATE_LIMIT_REDIS_TOKEN?.trim() &&
    e.RATE_LIMIT_SALT?.trim() &&
    e.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() &&
    e.TURNSTILE_SECRET_KEY?.trim() &&
    e.TURNSTILE_EXPECTED_HOSTNAME?.trim(),
  );
}
