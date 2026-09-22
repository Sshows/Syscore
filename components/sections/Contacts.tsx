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
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <Reveal>
        <PlanBadge label={contacts.status} />
        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          {contacts.title}
        </h2>
        <p className="text-graphite/75 mt-4 max-w-2xl text-base leading-7">
          {contacts.description}
        </p>
      </Reveal>
      <Reveal className="mt-10 max-w-xl">
        <form
          className="border-graphite/10 space-y-4 rounded-3xl border p-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <p className="text-graphite/70 text-sm leading-6">
            {contacts.formNotice}
          </p>
          <label className="block text-sm">
            <span className="mb-2 block font-medium">
              {contacts.form.nameLabel}
            </span>
            <input
              disabled
              placeholder={contacts.form.namePlaceholder}
              className="border-graphite/15 bg-graphite/5 w-full rounded-xl border px-3 py-3 text-sm"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-2 block font-medium">
              {contacts.form.emailLabel}
            </span>
            <input
              disabled
              type="email"
              placeholder={contacts.form.emailPlaceholder}
              className="border-graphite/15 bg-graphite/5 w-full rounded-xl border px-3 py-3 text-sm"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-2 block font-medium">
              {contacts.form.messageLabel}
            </span>
            <textarea
              disabled
              rows={4}
              placeholder={contacts.form.messagePlaceholder}
              className="border-graphite/15 bg-graphite/5 w-full rounded-xl border px-3 py-3 text-sm"
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
