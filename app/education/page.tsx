import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { CyberRange } from "@/components/education/CyberRange";
import { redesign as copy } from "@/content/site-content";
export const metadata: Metadata = {
  title: "Киберполигон и обучение",
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
      <CyberRange />
      <section className="contact-banner range-contact">
        <div>
          <h2>{copy.education.cta}</h2>
          <p className="fine-print">{copy.education.notice}</p>
        </div>
        <div className="actions">
          <Link className="button" href="/contact?topic=education">
            {copy.education.cta}
          </Link>
          <Link className="text-link" href="/founder#documents">
            {copy.founder.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
