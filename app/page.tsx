import Link from "next/link";
import { CyberCore } from "@/components/ui/CyberCore";
import { Reveal } from "@/components/ui/Reveal";
import { experience as copy, siteContent } from "@/content/site-content";

export default function Home() {
  return (
    <div className="site-shell">
      <section className="mission-hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="system-label">
            <span className="status-light" />
            {copy.hero.label}
          </p>
          <h1 id="hero-title">{copy.hero.title}</h1>
          <p className="hero-description">{copy.hero.description}</p>
          <div className="action-row">
            <Link className="action-primary" href="/contact">
              {copy.hero.action} ↗
            </Link>
            <Link className="action-text" href="#missions">
              {copy.hero.secondary} ↓
            </Link>
          </div>
          <p className="micro-note">{copy.hero.notice}</p>
        </div>
        <div className="core-console tech-grid">
          <div className="console-top">
            <span>SYSTEM SECURITY CORE</span>
            <span>KZ / 01</span>
          </div>
          <CyberCore />
          <div className="console-bottom">
            <span>
              {siteContent.company.legalName}
              <small>REGISTERED / {siteContent.company.registrationDate}</small>
            </span>
            <span>
              ALMATY<small>CYBERSECURITY</small>
            </span>
          </div>
        </div>
      </section>
      <section className="mission-section" id="missions">
        <div className="section-heading">
          <div>
            <p className="system-label">{copy.home.taskLabel}</p>
            <h2>{copy.home.taskTitle}</h2>
          </div>
          <span className="section-index">01 / SELECT</span>
        </div>
        <div className="mission-grid">
          {copy.directions.map((item) => (
            <Link
              className="mission-card"
              href={
                item.id === "education" ? "/education" : `/services#${item.id}`
              }
              key={item.id}
            >
              <div className="card-top">
                <span>{item.number}</span>
                <span>↗</span>
              </div>
              <div
                className={`mission-glyph glyph-${item.id}`}
                aria-hidden="true"
              >
                <i />
                <i />
                <i />
              </div>
              <p className="system-label">{item.tag}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <Reveal>
        <section className="founder-strip">
          <div>
            <p className="system-label">{copy.home.companyLabel}</p>
            <h2>{copy.home.companyTitle}</h2>
            <p>{copy.home.companyText}</p>
            <Link className="action-text" href="/company">
              {copy.home.companyAction} ↗
            </Link>
          </div>
          <div className="degree-mark" aria-label="PhD">
            <span>PhD</span>
            <small>LAW ENFORCEMENT / 2021</small>
            <div className="identity-line">BIN / {siteContent.company.bin}</div>
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="education-strip">
          <p className="system-label">EDUCATION / PLANNED</p>
          <h2>{copy.home.educationTitle}</h2>
          <p>{copy.home.educationText}</p>
          <Link className="action-text" href="/education">
            {copy.home.educationAction} ↗
          </Link>
          <div className="learning-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </section>
      </Reveal>
      <section className="contact-strip">
        <p className="system-label">CONTACT THE CORE</p>
        <h2>{copy.home.contactTitle}</h2>
        <p>{copy.home.contactText}</p>
        <div className="action-row">
          <Link className="action-primary" href="/contact">
            {copy.hero.action} ↗
          </Link>
          <a className="contact-number" href={siteContent.company.phoneHref}>
            {siteContent.company.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
