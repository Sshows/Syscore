"use client";
import { DocumentImage } from "@/components/DocumentImage";
import { useRef, useState, type KeyboardEvent } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { certificates } from "@/content/certificates";
import { redesign } from "@/content/site-content";

export function CertificateGallery() {
  const copy = redesign.gallery;
  const [filter, setFilter] = useState("all"),
    [index, setIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1),
    [rotation, setRotation] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null),
    trigger = useRef<HTMLButtonElement | null>(null);
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const reduced = useReducedMotion();
  const shown = certificates.filter(
    (item) => filter === "all" || item.category === filter,
  );
  const selected = index === null ? null : certificates[index];
  const reset = () => {
    setZoom(1);
    setRotation(0);
    x.set(0);
    y.set(0);
  };
  const open = (id: string, button: HTMLButtonElement) => {
    trigger.current = button;
    reset();
    setIndex(certificates.findIndex((item) => item.id === id));
    dialog.current?.showModal();
  };
  const close = () => {
    dialog.current?.close();
    setIndex(null);
    trigger.current?.focus();
  };
  const navigate = (delta: number) => {
    if (index === null) return;
    const position = shown.findIndex(
      (item) => item.id === certificates[index].id,
    );
    const item = shown[(position + delta + shown.length) % shown.length];
    setIndex(certificates.findIndex((value) => value.id === item.id));
    reset();
  };
  const changeZoom = (delta: number) => {
    const next = Math.max(1, Math.min(3, zoom + delta));
    setZoom(next);
    if (next === 1) {
      x.set(0);
      y.set(0);
    }
  };
  const keys = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.shiftKey && event.key.startsWith("Arrow")) {
      event.preventDefault();
      if (zoom > 1) {
        const dx =
          event.key === "ArrowRight" ? -60 : event.key === "ArrowLeft" ? 60 : 0;
        const dy =
          event.key === "ArrowDown" ? -60 : event.key === "ArrowUp" ? 60 : 0;
        x.set(Math.max(-800, Math.min(800, x.get() + dx)));
        y.set(Math.max(-800, Math.min(800, y.get() + dy)));
      }
      return;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      navigate(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      navigate(-1);
    } else if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      changeZoom(0.25);
    } else if (event.key === "-") {
      event.preventDefault();
      changeZoom(-0.25);
    }
  };
  return (
    <>
      <div className="gallery-filters" role="group" aria-label={copy.title}>
        {copy.filters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="certificate-grid">
        {shown.map((item) => (
          <article className="certificate-tile" key={item.id}>
            <button
              type="button"
              className="certificate-preview"
              aria-label={`${copy.view}: ${item.title}`}
              onClick={(event) => open(item.id, event.currentTarget)}
              data-cursor="Смотреть"
            >
              <DocumentImage certificate={item} />
              <span>{copy.view}</span>
            </button>
            <h3>{item.title}</h3>
            <p>
              {item.issuer} · {item.year}
            </p>
          </article>
        ))}
      </div>
      <dialog
        className="document-lightbox"
        ref={dialog}
        aria-labelledby="document-title"
        onCancel={() => {
          setIndex(null);
          trigger.current?.focus();
        }}
        onKeyDown={keys}
      >
        <div className="lightbox-top">
          <span>
            {selected
              ? `${certificates.indexOf(selected) + 1} / ${certificates.length}`
              : ""}
          </span>
          <button type="button" onClick={close} autoFocus>
            {copy.close} ×
          </button>
        </div>
        {selected && (
          <>
            <div className="lightbox-canvas">
              <motion.div
                key={selected.id}
                className="lightbox-document"
                data-cursor={zoom > 1 ? "Тяни" : "Смотреть"}
                drag={zoom > 1}
                dragMomentum={false}
                dragConstraints={{
                  top: -800,
                  bottom: 800,
                  left: -800,
                  right: 800,
                }}
                style={{ x, y }}
                animate={{ scale: zoom, rotate: rotation }}
                transition={{ duration: reduced ? 0 : 0.18 }}
              >
                <DocumentImage certificate={selected} lightbox />
              </motion.div>
            </div>
            <div className="lightbox-caption">
              <strong id="document-title">{selected.title}</strong>
              <p>
                {selected.issuer} · {selected.year}
              </p>
            </div>
            <div className="lightbox-controls">
              <button
                type="button"
                aria-label={copy.previous}
                onClick={() => navigate(-1)}
              >
                ←
              </button>
              <button
                type="button"
                aria-label={copy.zoomOut}
                onClick={() => changeZoom(-0.25)}
                disabled={zoom <= 1}
              >
                −
              </button>
              <button type="button" onClick={reset} aria-label={copy.reset}>
                {Math.round(zoom * 100)}%
              </button>
              <button
                type="button"
                aria-label={copy.zoomIn}
                onClick={() => changeZoom(0.25)}
                disabled={zoom >= 3}
              >
                +
              </button>
              <button
                type="button"
                aria-label={copy.rotate}
                onClick={() => setRotation((value) => value + 90)}
              >
                ↻
              </button>
              <button
                type="button"
                aria-label={copy.next}
                onClick={() => navigate(1)}
              >
                →
              </button>
              <a
                href={`/certificates/${selected.pdf}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.pdf}
              </a>
              {selected.verify && (
                <a
                  href={selected.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.verify}
                </a>
              )}
            </div>
            <p
              className="fine-print"
              style={{ textAlign: "center", margin: "12px auto" }}
            >
              {copy.hint}
            </p>
          </>
        )}
      </dialog>
    </>
  );
}
