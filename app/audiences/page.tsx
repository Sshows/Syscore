import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { redesign as copy } from "@/content/site-content";
export const metadata: Metadata = {
  title: "Для кого",
  description: copy.audiences.description,
  alternates: { canonical: "/audiences" },
};
export default function Audiences() {
  return (
    <div className="shell page-wrap">
      <PageIntro
        label={copy.common.audiences}
        title={copy.audiences.title}
        description={copy.audiences.description}
      />
      {copy.audiences.items.map((item, index) => (
        <section className="audience-detail" key={item.title}>
          <div className="audience-symbol" aria-hidden="true">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {index === 0 ? (
                <>
                  <path d="m8 23 24-13 24 13H8ZM12 50h40M18 28v16m14-16v16m14-16v16M8 54h48" />
                </>
              ) : index === 1 ? (
                <>
                  <path d="M32 10v42M13 21h38M18 21 8 39h20L18 21Zm28 0L36 39h20L46 21ZM20 54h24" />
                </>
              ) : (
                <>
                  <rect x="10" y="12" width="28" height="40" rx="2" />
                  <path d="M38 27h16v25H38M18 22h12m-12 8h12m-12 8h12m14-4h4m-4 8h4" />
                </>
              )}
            </svg>
          </div>
          <div>
            <p className="eyebrow">{item.subtitle}</p>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <Link className="text-link" href={`/contact?topic=${item.topic}`}>
              {copy.hero.cta}
            </Link>
          </div>
        </section>
      ))}
      <p className="fine-print">{copy.audiences.notice}</p>
    </div>
  );
}
