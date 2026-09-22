import type { Metadata } from "next";
import { siteContent } from "@/content/site-content";

const page = siteContent.legalPages.privacy;

export const metadata: Metadata = {
  title: page.title,
  description: page.updated,
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-mint text-sm font-semibold tracking-[0.14em] uppercase">
        Черновик
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {page.title}
      </h1>
      <p className="text-graphite/70 mt-4 text-sm leading-7">{page.updated}</p>
      <div className="mt-10 space-y-8">
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="text-graphite/75 mt-3 text-sm leading-7">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
