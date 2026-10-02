import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { experience as copy } from "@/content/site-content";
export const metadata: Metadata = {
  title: "Образовательное направление",
  alternates: { canonical: "/education" },
};
export default function Education() {
  return (
    <div className="site-shell inner-page">
      <PageIntro {...copy.education} />
      <div className="education-path">
        {copy.education.topics.map((topic, index) => (
          <article key={topic}>
            <span className="path-node">0{index + 1}</span>
            <h2>{topic}</h2>
            <p className="system-label">PLANNED</p>
          </article>
        ))}
      </div>
      <section className="contact-strip">
        <p>{copy.education.notice}</p>
        <Link className="action-primary" href="/contact?topic=education">
          {copy.education.cta} ↗
        </Link>
        <Link className="action-text" href="/company">
          Подготовка основателя ↗
        </Link>
      </section>
    </div>
  );
}
