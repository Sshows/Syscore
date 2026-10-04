import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { redesign as copy, siteContent } from "@/content/site-content";
export const metadata: Metadata = {
  title: "Компания",
  description: copy.company.description,
  alternates: { canonical: "/company" },
};
export default function Company() {
  const c = siteContent.company;
  const values = [
    c.bin,
    `${c.oked} · ${c.activity}`,
    c.registrationDate,
    c.director,
    c.address,
  ];
  return (
    <div className="shell page-wrap">
      <PageIntro
        label={copy.common.company}
        title={copy.company.title}
        description={copy.company.description}
      />
      <section className="identity-panel">
        <div>
          <Image
            className="company-mark"
            src="/brand/syscore-mark.svg"
            width={80}
            height={80}
            alt=""
            unoptimized
          />
          <h2>SYSCORE</h2>
          <p>{c.legalName}</p>
          <p className="text-muted">{c.location}</p>
          <Link className="text-link" href="/founder">
            {copy.founder.cta}
          </Link>
        </div>
        <dl>
          {values.map((value, index) => (
            <div key={value}>
              <dt>{copy.company.labels[index]}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <p className="fine-print" style={{ marginTop: 24 }}>
        {copy.company.notice}
      </p>
      <section className="contact-banner">
        <div>
          <h2>{copy.contact.title}</h2>
          <a className="contact-number" href={c.phoneHref}>
            {c.phone}
          </a>
        </div>
        <Link href="/contact" className="button">
          {copy.contact.cta}
        </Link>
      </section>
    </div>
  );
}
