import Link from "next/link";
import { siteContent } from "@/content/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1fr_auto]">
        <div><p className="text-xl font-semibold"><span className="text-white">SYS</span><span className="text-mint">CORE</span></p><p className="mt-2 text-sm text-white/55">System Security Core · Kazakhstan</p><p className="mt-6 text-xs text-white/40">{siteContent.footer.copyright}</p></div>
        <nav
          className="flex flex-col gap-2 sm:flex-row sm:gap-6"
          aria-label="Юридические ссылки"
        >
          {siteContent.footer.legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition hover:text-mint"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
