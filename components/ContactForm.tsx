"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { experience as copy } from "@/content/site-content";
import { leadSchema } from "@/lib/leads/schema";

export function ContactForm({
  enabled,
  topic,
}: {
  enabled: boolean;
  topic: string;
}) {
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || !enabled) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const parsed = leadSchema.safeParse({
      name: data.get("name"),
      phone: data.get("phone"),
      topic: data.get("topic"),
      message: data.get("message"),
      website: data.get("website"),
      consent: data.get("consent") === "on",
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
        signal: AbortSignal.timeout(20000),
      });
      const result = (await response.json()) as { message?: string };
      setFeedback(result.message || copy.contact.error);
      setSuccess(response.ok);
      if (response.ok) form.reset();
    } catch {
      setFeedback(copy.contact.error);
    } finally {
      setBusy(false);
    }
  }
  return (
    <form
      className="lead-form"
      onSubmit={submit}
      aria-label="Обращение в SYSCORE"
    >
      {!enabled && <p className="form-notice">{copy.contact.unavailable}</p>}
      <label>
        {copy.contact.topic}
        <select name="topic" defaultValue={topic}>
          {copy.directions.map((item) => (
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
      <p className="micro-note" id="privacy-warning">
        {copy.contact.warning}
      </p>
      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>
          {copy.contact.consent}. <Link href="/personal-data">Условия</Link>
        </span>
      </label>
      <button
        className="action-primary"
        disabled={busy || !enabled}
        type="submit"
      >
        {busy ? copy.contact.sending : copy.contact.submit} ↗
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
