"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { redesign } from "@/content/site-content";

export function Header() {
  const path = usePathname();
  const [hover, setHover] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null),
    toggle = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  const active =
    hover || redesign.nav.find((item) => path.startsWith(item.href))?.href;
  const close = () => {
    dialog.current?.close();
    setOpen(false);
    toggle.current?.focus();
  };
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        К содержимому
      </a>
      <div className="header-inner">
        <Link href="/" className="brand-link" aria-label="SYSCORE — главная">
          <BrandLogo />
        </Link>
        <nav
          aria-label="Основное меню"
          className="desktop-nav"
          onPointerLeave={() => setHover(null)}
        >
          {redesign.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onPointerEnter={() => setHover(item.href)}
              onFocus={() => setHover(item.href)}
              onBlur={() => setHover(null)}
              aria-current={path === item.href ? "page" : undefined}
            >
              <span>{item.label}</span>
              {active === item.href && (
                <motion.i
                  className="liquid-indicator"
                  layoutId="liquid-nav"
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 360, damping: 27 }
                  }
                />
              )}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="button button-small header-contact"
          data-magnetic
        >
          Связаться
        </Link>
        <button
          className="menu-toggle"
          type="button"
          ref={toggle}
          aria-controls="site-menu"
          aria-expanded={open}
          onClick={() => {
            setOpen(true);
            dialog.current?.showModal();
          }}
        >
          Меню <span aria-hidden="true">≡</span>
        </button>
      </div>
      <dialog
        id="site-menu"
        className="liquid-menu"
        ref={dialog}
        onCancel={() => {
          setOpen(false);
          toggle.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <motion.div
          animate={
            open
              ? { opacity: 1, clipPath: "circle(150% at 100% 0%)" }
              : { opacity: 0, clipPath: "circle(0% at 100% 0%)" }
          }
          transition={{
            duration: reduced ? 0 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="menu-surface"
        >
          <div className="menu-top">
            <BrandLogo />
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Закрыть меню"
            >
              Закрыть ×
            </button>
          </div>
          <nav aria-label="Все страницы">
            {redesign.menu.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                onClick={close}
                aria-current={path === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p>System Security Core · Almaty</p>
        </motion.div>
      </dialog>
    </header>
  );
}
