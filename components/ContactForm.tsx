"use client";
import Link from "next/link";
import { useCallback, useState, type FormEvent } from "react";
import {
  experience as copy,
  redesign,
  siteContent,
} from "@/content/site-content";
import { leadSchema } from "@/lib/leads/schema";
import { Turnstile } from "@/components/Turnstile";
export function ContactForm({
  enabled,
  topic,
  siteKey,
  nonce,
}: {
  enabled: boolean;
  topic: string;
  siteKey: string;
  nonce?: string;
}) {
  const [busy, setBusy] = useState(false),
    [feedback, setFeedback] = useState(""),
    [success, setSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(""),
    [resetKey, setResetKey] = useState(0);
  const onToken = useCallback((token: string) => setCaptchaToken(token), []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || !enabled) return;
    const form = event.currentTarget,
      data = new FormData(form);
    const parsed = leadSchema.safeParse({
      name: data.get("name"),
      phone: data.get("phone"),
      topic: data.get("topic"),
      message: data.get("message"),
      website: data.get("website"),
      consent: data.get("consent") === "on",
      captchaToken,
    });
    if (!parsed.success) {
      setFeedback(copy.contact.invalid);
      setSuccess(false);
      return;
    }
    setBusy(true);
    setFeedback("");
    setSuccess(false);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
        signal: AbortSignal.timeout(25000),
      });
      const result = (await response.json()) as { message?: string };
      setFeedback(result.message || copy.contact.error);
      setSuccess(response.ok);
      if (response.ok) form.reset();
    } catch {
      setFeedback(copy.contact.error);
    } finally {
      setBusy(false);
      setCaptchaToken("");
      setResetKey((value) => value + 1);
    }
  }
  if (!enabled)
    return (
      <div className="lead-form">
        <p className="eyebrow">{redesign.common.contact}</p>
        <h2>{redesign.contact.cta}</h2>
        <p className="form-notice">{copy.contact.unavailable}</p>
        <p className="fine-print">{redesign.contact.safety}</p>
        <a className="button" href={siteContent.company.phoneHref}>
          {redesign.contact.call}
        </a>
      </div>
    );
  return (
    <form
      className="lead-form"
      onSubmit={submit}
      aria-label="Обращение в SYSCORE"
      aria-busy={busy}
    >
      <label>
        {copy.contact.topic}
        <select name="topic" defaultValue={topic}>
          {[
            ...redesign.services.items,
            { id: "education", title: redesign.common.education },
          ].map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </label>
      <label>
        {copy.contact.name}
        <input
          name="name"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
        />
      </label>
      <label>
        {copy.contact.phone}
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          maxLength={30}
        />
      </label>
      <label>
        {copy.contact.message}
        <textarea
          name="message"
          maxLength={1200}
          rows={3}
          aria-describedby="privacy-warning"
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="fine-print" id="privacy-warning">
        {copy.contact.warning}
      </p>
      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>
          {copy.contact.consent}. <Link href="/personal-data">Условия</Link>
        </span>
      </label>
      <Turnstile
        siteKey={siteKey}
        nonce={nonce}
        onToken={onToken}
        resetKey={resetKey}
      />
      <button className="button" type="submit" disabled={busy || !captchaToken}>
        {busy ? copy.contact.sending : copy.contact.submit}
      </button>
      <p
        role="status"
        aria-live="polite"
        className={success ? "form-notice" : "form-error"}
      >
        {feedback}
      </p>
    </form>
  );
}
