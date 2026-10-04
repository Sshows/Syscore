import "server-only";
import type { LeadMessage } from "./schema";
import { redesign } from "@/content/site-content";
import {
  httpsEndpoint,
  requestJson,
  IntegrationError,
} from "@/lib/server/http-client";
export interface LeadAdapter {
  deliver(lead: LeadMessage, requestId: string): Promise<void>;
}
class TelegramAdapter implements LeadAdapter {
  async deliver(lead: LeadMessage) {
    const topic =
      redesign.services.items.find((item) => item.id === lead.topic)?.title ||
      redesign.common.education;
    const text = [
      "SYSCORE · Новое обращение",
      `Тема: ${topic}`,
      `Имя: ${lead.name}`,
      `Телефон: ${lead.phone}`,
      `Задача: ${lead.message || "Не указана"}`,
      "Согласие на обратную связь: да",
    ].join("\n");
    const result = await requestJson<{ ok?: boolean }>(
      httpsEndpoint(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      ),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text }),
      },
      { timeoutMs: 8000 },
    );
    if (result.ok !== true) throw new IntegrationError("response");
  }
}
class WebhookAdapter implements LeadAdapter {
  async deliver(lead: LeadMessage, requestId: string) {
    const result = await requestJson<{ accepted?: boolean }>(
      httpsEndpoint(process.env.LEAD_WEBHOOK_URL),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.LEAD_WEBHOOK_TOKEN}`,
          "Idempotency-Key": requestId,
        },
        body: JSON.stringify({ id: requestId, lead }),
      },
      { timeoutMs: 8000 },
    );
    if (result.accepted !== true) throw new IntegrationError("response");
  }
}
export function leadAdapter(): LeadAdapter {
  return process.env.LEAD_DELIVERY === "webhook"
    ? new WebhookAdapter()
    : new TelegramAdapter();
}
// A future university, email or database gateway implements this interface.
// POST delivery is not blindly retried: an uncertain acknowledgement could duplicate a lead.
