import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { experience as copy, siteContent } from "@/content/site-content";
export const metadata: Metadata = {
  title: "Компания и основатель",
  alternates: { canonical: "/company" },
};
export default function Company() {
  const legal = [
    siteContent.company.bin,
    `${siteContent.company.oked} · ${siteContent.company.activity}`,
    siteContent.company.registrationDate,
    siteContent.company.director,
    siteContent.company.address,
  ];
  return (
    <div className="site-shell inner-page">
      <PageIntro {...copy.company} />
      <section className="company-identity tech-grid">
        <div>
          <p className="system-label">SYSTEM SECURITY CORE</p>
          <h2>SYSCORE</h2>
          <p>{siteContent.company.location}</p>
        </div>
        <div className="identity-circuit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="identity-data">
          <span>
            BIN<strong>{siteContent.company.bin}</strong>
          </span>
          <span>
            OKED<strong>{siteContent.company.oked}</strong>
          </span>
          <span>
            REGISTERED<strong>{siteContent.company.registrationDate}</strong>
          </span>
        </div>
      </section>
      <section className="founder-strip">
        <div>
          <p className="system-label">{copy.company.founderLabel}</p>
          <h2>{copy.company.founderTitle}</h2>
          <p>{siteContent.company.director}</p>
          <p>{copy.company.degreeDetail}</p>
        </div>
        <div className="degree-mark">
          <span>PhD</span>
          <small>{copy.company.degree}</small>
        </div>
      </section>
      <section className="credentials-section">
        <h2>{copy.company.credentialsTitle}</h2>
        <p className="micro-note">{copy.company.credentialsNotice}</p>
        <div className="credentials-grid">
          {copy.credentials.map((item) => (
            <article className="credential-card" key={item.title}>
              <p className="system-label">
                {item.group === "security" ? "SECURITY" : "EDUCATION"} /{" "}
                {item.date}
              </p>
              <h3>{item.title}</h3>
              <p>{item.issuer}</p>
              {item.href ? (
                <a
                  className="action-text"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Проверить сертификат ↗
                </a>
              ) : (
                <span className="micro-note">
                  Документ предоставлен основателем
                </span>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="legal-section">
        <h2>{copy.company.legalTitle}</h2>
        <p>{siteContent.company.legalName}</p>
        <dl>
          {legal.map((value, index) => (
            <div key={value}>
              <dt>{copy.company.legalLabels[index]}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
