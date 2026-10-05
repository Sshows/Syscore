"use client";
import { useState } from "react";
import { certificates } from "@/content/certificates";
import { redesign } from "@/content/site-content";

// Deliberately metadata-only: no paths, images, embeds or document downloads.
export function CertificateGallery() {
  const copy = redesign.gallery;
  const [filter, setFilter] = useState("all");
  const shown = certificates.filter(
    (item) => filter === "all" || item.category === filter,
  );
  return (
    <>
      <div className="gallery-filters" role="group" aria-label={copy.title}>
        {copy.filters.map((item) => (
          <button
            type="button"
            key={item.id}
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="certificate-grid" aria-live="polite" aria-atomic="false">
        {shown.map((item) => (
          <article className="qualification-card" key={item.id}>
            <div className="qualification-meta">
              <span>
                {item.category === "degree"
                  ? redesign.interface.degreeLabel
                  : redesign.interface.qualificationLabel}
              </span>
              <time>{item.year}</time>
            </div>
            <h3>{item.title}</h3>
            <p>{item.issuer}</p>
            {item.verify ? (
              <a
                href={item.verify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                {copy.verify}
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </article>
        ))}
      </div>
      <aside className="qualification-privacy">
        <p>{copy.privacy}</p>
        <a className="text-link" href="/contact">
          {copy.request}
        </a>
      </aside>
    </>
  );
}
