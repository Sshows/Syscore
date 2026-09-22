"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { siteContent } from "@/content/site-content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const ids = siteContent.nav.map((item) => item.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (nodes.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b1013]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/#top" className="text-lg font-semibold tracking-tight">
          <span className="text-white">SYS</span><span className="text-mint">CORE</span>
        </Link>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Основное меню"
        >
          {siteContent.nav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-sm transition-colors ${
                activeId === item.id
                  ? "text-mint font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href={siteContent.company.whatsappHref} target="_blank" rel="noreferrer" className="px-4 py-2 text-xs">WhatsApp ↗</ButtonLink>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">
            {open ? "Закрыть меню" : "Открыть меню"}
          </span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[#0b1013] px-4 py-6 md:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Мобильное меню">
          {siteContent.nav.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-base ${activeId === item.id ? "text-mint font-semibold" : "text-white/80"}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
          ))}
          <ButtonLink href={siteContent.company.whatsappHref} target="_blank" rel="noreferrer" className="w-full">WhatsApp ↗</ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
