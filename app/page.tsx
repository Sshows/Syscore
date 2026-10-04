import Link from "next/link";
import Image from "next/image";
import { CoreScene } from "@/components/brand/CoreScene";
import { EvidenceArt } from "@/components/brand/EvidenceArt";
import { redesign as copy, siteContent } from "@/content/site-content";

export default function Home() {
  return (
    <div className="shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="pill">
            {siteContent.company.legalName} · {copy.common.registered}
          </span>
          <p className="eyebrow">{copy.hero.note}</p>
          <h1 id="hero-title">
            {copy.hero.title.split(" ").map((word) => (
              <span className="title-word" key={word}>
                {word}
              </span>
            ))}
          </h1>
          <p className="hero-description">{copy.hero.description}</p>
          <div className="actions">
            <Link href="/contact" className="button" data-magnetic>
              {copy.hero.cta}
            </Link>
            <Link href="/company" className="text-link">
              {copy.hero.secondary}
            </Link>
          </div>
          <p className="fine-print">{copy.hero.status}</p>
        </div>
        <CoreScene />
      </section>
      <div className="hero-bottom">
        <span>{copy.common.location}</span>
        <span>
          {siteContent.company.registrationDate} · БИН {siteContent.company.bin}
        </span>
        <span>System Security Core</span>
      </div>
      <section
        className="section"
        id="directions"
        aria-labelledby="directions-title"
      >
        <div className="section-header">
          <h2 id="directions-title">{copy.services.title}</h2>
          <p>{copy.services.description}</p>
        </div>
        <div className="service-composition">
          <div className="evidence-art">
            <EvidenceArt />
            <span className="art-caption">{copy.common.evidence}</span>
          </div>
          <div className="service-rows">
            {copy.services.items.map((item) => (
              <Link
                href={`/services#${item.id}`}
                className="service-row"
                key={item.id}
                data-cursor="Открыть"
              >
                <h3>{item.title}</h3>
                <p>{item.short}</p>
              </Link>
            ))}
          </div>
        </div>
        <p className="fine-print" style={{ marginTop: 24 }}>
          {copy.services.notice}
        </p>
      </section>
      <section className="founder-home" aria-labelledby="founder-title">
        <div>
          <p className="eyebrow">{copy.common.founder}</p>
          <h2 id="founder-title">{copy.founder.title}</h2>
          <p>{copy.founder.description}</p>
          <Link href="/founder" className="text-link">
            {copy.founder.cta}
          </Link>
        </div>
        <Link
          href="/founder#documents"
          className="founder-paper"
          aria-label={copy.founder.cta}
          data-cursor="Документы"
        >
          <Image
            src="/certificates/phd.webp"
            alt="Диплом PhD Аскара Сысоева, 2021"
            fill
            sizes="(max-width: 800px) 85vw, 40vw"
          />
        </Link>
      </section>
      <section className="section" aria-labelledby="audiences-title">
        <div className="section-header">
          <h2 id="audiences-title">{copy.audiences.title}</h2>
          <Link href="/audiences" className="text-link">
            {copy.common.audiences}
          </Link>
        </div>
        <div className="audience-band">
          {copy.audiences.items.map((item) => (
            <article key={item.title}>
              <span className="audience-type">{item.subtitle}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className="fine-print">{copy.audiences.notice}</p>
      </section>
      <section className="contact-banner">
        <div>
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.description}</p>
        </div>
        <Link href="/contact" className="button" data-magnetic>
          {copy.contact.cta}
        </Link>
      </section>
    </div>
  );
}
