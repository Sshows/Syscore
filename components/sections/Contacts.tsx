"use client";

import { Button } from "@/components/ui/Button";
import { PlanBadge } from "@/components/ui/PlanBadge";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/content/site-content";

export function Contacts() {
  const { contacts } = siteContent;

  return (
    <section
      id={contacts.id}
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
    >
      <Reveal>
        <PlanBadge label={contacts.status} />
        <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Сильная защита начинается с диалога.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
          {contacts.description}
        </p>
      </Reveal>
      <Reveal className="tech-card relative mt-10 max-w-xl overflow-hidden rounded-3xl">
        <form
          className="space-y-4 p-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <p className="text-sm leading-6 text-white/60">
            {contacts.formNotice}
          </p>
          <label className="block text-sm text-white/85">
            <span className="mb-2 block font-medium">
              {contacts.form.nameLabel}
            </span>
            <input
              disabled
              placeholder={contacts.form.namePlaceholder}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white"
            />
          </label>
          <label className="block text-sm text-white/85">
            <span className="mb-2 block font-medium">
              {contacts.form.emailLabel}
            </span>
            <input
              disabled
              type="email"
              placeholder={contacts.form.emailPlaceholder}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white"
            />
          </label>
          <label className="block text-sm text-white/85">
            <span className="mb-2 block font-medium">
              {contacts.form.messageLabel}
            </span>
            <textarea
              disabled
              rows={4}
              placeholder={contacts.form.messagePlaceholder}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white"
            />
          </label>
          <Button type="submit" disabled>
            {contacts.form.disabledLabel}
          </Button>
        </form>
      </Reveal>
    </section>
  );
}
