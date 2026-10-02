import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { experience as copy } from "@/content/site-content";
export const metadata: Metadata = {
  title: "Направления",
  alternates: { canonical: "/services" },
};
export default function Services() {
  return (
    <div className="site-shell inner-page">
      <PageIntro {...copy.services} />
      <nav className="category-nav" aria-label="Выбрать направление">
        {copy.directions.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.title} ↓
          </a>
        ))}
      </nav>
      <div className="service-list">
        {copy.directions.map((item) => (
          <section className="service-detail" id={item.id} key={item.id}>
            <div>
              <p className="system-label">
                {item.number} / {item.tag}
              </p>
              <h2>{item.title}</h2>
              <p>{item.scope}</p>
            </div>
            <div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link className="action-text" href={`/contact?topic=${item.id}`}>
                {copy.services.cta} ↗
              </Link>
            </div>
          </section>
        ))}
      </div>
      <p className="micro-note">{copy.services.disclaimer}</p>
    </div>
  );
}
