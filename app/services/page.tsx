import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { redesign as copy, experience } from "@/content/site-content";
export const metadata: Metadata = {
  title: "Направления",
  description: copy.services.description,
  alternates: { canonical: "/services" },
};
export default function Services() {
  return (
    <div className="shell page-wrap">
      <PageIntro
        label={copy.common.services}
        title={copy.services.title}
        description={copy.services.description}
      />
      <nav className="inline-nav" aria-label={copy.common.services}>
        {copy.services.items.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.title}
          </a>
        ))}
      </nav>
      <p className="fine-print">{copy.services.notice}</p>
      {copy.services.items.map((item) => (
        <section className="service-detail" id={item.id} key={item.id}>
          <div>
            <span className="pill">{copy.common.planned}</span>
            <h2 style={{ marginTop: 24 }}>{item.title}</h2>
            <p>{item.text}</p>
          </div>
          <div>
            <p>{item.detail}</p>
            <Link
              href={`/contact?topic=${item.id}`}
              className="button button-secondary"
            >
              {copy.common.discuss}
            </Link>
          </div>
        </section>
      ))}
      <p className="fine-print">{experience.services.disclaimer}</p>
    </div>
  );
}
