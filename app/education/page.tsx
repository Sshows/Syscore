import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { redesign as copy } from "@/content/site-content";
export const metadata: Metadata = {
  title: "Обучение",
  description: copy.education.description,
  alternates: { canonical: "/education" },
};
export default function Education() {
  return (
    <div className="shell page-wrap">
      <PageIntro
        label={copy.common.education}
        title={copy.education.title}
        description={copy.education.description}
      />
      <div className="education-visual">
        <div className="learning-diagram" aria-hidden="true">
          <span>SYSCORE</span>
        </div>
        <div>
          <span className="pill">{copy.common.planned}</span>
          <ul className="topic-list">
            {copy.education.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <p className="fine-print">{copy.education.notice}</p>
          <div className="actions">
            <Link className="button" href="/contact?topic=education">
              {copy.education.cta}
            </Link>
            <Link className="text-link" href="/founder#documents">
              {copy.founder.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
