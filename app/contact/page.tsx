import type { Metadata } from "next";
import { headers } from "next/headers";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactForm } from "@/components/ContactForm";
import { redesign as copy, siteContent } from "@/content/site-content";
import { leadDeliveryConfigured } from "@/lib/leads/config";
import { leadTopics } from "@/lib/leads/schema";
export const metadata: Metadata = {
  title: "Контакты",
  description: copy.contact.description,
  alternates: { canonical: "/contact" },
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const params = await searchParams;
  const topic =
    leadTopics.find((value) => value === params.topic) || "incident";
  const nonce = (await headers()).get("x-nonce") || undefined,
    c = siteContent.company;
  return (
    <div className="shell page-wrap">
      <PageIntro
        label={copy.common.contact}
        title={copy.contact.title}
        description={copy.contact.description}
      />
      <div className="contact-layout">
        <div className="contact-details">
          <p className="eyebrow">{c.legalName}</p>
          <a className="contact-number" href={c.phoneHref}>
            {c.phone}
          </a>
          <a
            className="text-link"
            href={c.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.contact.whatsapp}
          </a>
          <address>{c.address}</address>
          <dl className="contact-legal">
            <div>
              <dt>БИН</dt>
              <dd>{c.bin}</dd>
            </div>
            <div>
              <dt>ОКЭД</dt>
              <dd>
                {c.oked} · {c.activity}
              </dd>
            </div>
            <div>
              <dt>{copy.company.labels[2]}</dt>
              <dd>{c.registrationDate}</dd>
            </div>
            <div>
              <dt>{copy.company.labels[3]}</dt>
              <dd>{c.director}</dd>
            </div>
          </dl>
        </div>
        <ContactForm
          key={topic}
          enabled={leadDeliveryConfigured()}
          topic={topic}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() || ""}
          nonce={nonce}
        />
      </div>
    </div>
  );
}
