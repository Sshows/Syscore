import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactForm } from "@/components/ContactForm";
import { experience as copy, siteContent } from "@/content/site-content";
import { leadDeliveryConfigured } from "@/lib/leads/delivery";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Связаться с SYSCORE",
  alternates: { canonical: "/contact" },
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const params = await searchParams;
  const topic = copy.directions.some((item) => item.id === params.topic)
    ? params.topic!
    : "incident";
  return (
    <div className="site-shell inner-page">
      <PageIntro
        label={copy.contact.label}
        title={copy.contact.title}
        description={copy.contact.intro}
      />
      <div className="contact-layout">
        <div className="contact-details">
          <p className="system-label">
            {siteContent.company.legalName} / ALMATY
          </p>
          <a className="contact-number" href={siteContent.company.phoneHref}>
            {siteContent.company.phone}
          </a>
          <a
            className="action-text"
            href={siteContent.company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.contact.whatsapp} ↗
          </a>
          <address>{siteContent.company.address}</address>
          <p className="micro-note">
            BIN / {siteContent.company.bin}
            <br />
            OKED / {siteContent.company.oked}
            <br />
            REGISTERED / {siteContent.company.registrationDate}
          </p>
        </div>
        <ContactForm
          key={topic}
          enabled={leadDeliveryConfigured()}
          topic={topic}
        />
      </div>
    </div>
  );
}
