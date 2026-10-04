import type { Metadata } from "next";
import { CertificateGallery } from "@/components/CertificateGallery";
import { redesign as copy } from "@/content/site-content";
export const metadata: Metadata = {
  title: "Аскар Сысоев — основатель",
  description: copy.founder.description,
  alternates: { canonical: "/founder" },
};
export default function Founder() {
  return (
    <div className="shell page-wrap">
      <section className="founder-profile" aria-labelledby="founder-title">
        <div className="portrait-slot">
          <span aria-hidden="true">{copy.common.initials}</span>
          <p>{copy.founder.portraitTodo}</p>
        </div>
        <div>
          <p className="eyebrow">{copy.common.founder}</p>
          <h1 id="founder-title">{copy.founder.title}</h1>
          <p>{copy.founder.name}</p>
          <p>{copy.founder.rank}</p>
          <p className="degree-label">{copy.founder.degree}</p>
          <p>{copy.founder.biography}</p>
          <p className="todo-note">{copy.founder.biographyTodo}</p>
          <p className="todo-note">{copy.founder.awardsTodo}</p>
        </div>
      </section>
      <section id="documents" aria-labelledby="gallery-title">
        <div className="section-header">
          <div>
            <p className="eyebrow">{copy.founder.cta}</p>
            <h2 id="gallery-title">{copy.gallery.title}</h2>
          </div>
          <p>{copy.gallery.description}</p>
        </div>
        <p className="fine-print">{copy.founder.notice}</p>
        <CertificateGallery />
      </section>
    </div>
  );
}
