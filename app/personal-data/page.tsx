import type { Metadata } from "next";
import { experience, redesign } from "@/content/site-content";
const page = experience.dataPolicy;
export const metadata: Metadata = {
  title: redesign.common.personalData,
  description: page.updated,
  alternates: { canonical: "/personal-data" },
};
export default function PersonalData() {
  return (
    <article className="shell page-wrap legal-copy">
      <p className="eyebrow">SYSCORE</p>
      <h1>{redesign.common.personalData}</h1>
      <p>{page.updated}</p>
      {page.sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </section>
      ))}
    </article>
  );
}
