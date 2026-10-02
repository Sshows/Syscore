"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { experience, siteContent } from "@/content/site-content";
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        К содержимому
      </a>
      <div className="header-inner">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)}>
          SYS<span>CORE</span>
          <i aria-hidden="true">▣</i>
        </Link>
        <nav className="desktop-nav" aria-label="Основное меню">
          {experience.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="header-call" href={siteContent.company.phoneHref}>
          Связаться ↗
        </a>
        <button
          className="menu-toggle"
          ref={toggle}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Закрыть ×" : "Меню +"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Мобильное меню"
        >
          {experience.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label} ↗
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
