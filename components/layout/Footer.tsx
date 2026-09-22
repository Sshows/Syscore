import Link from "next/link";
import { siteContent } from "@/content/site-content";

export function Footer() {
  return (
    <footer className="border-graphite/10 bg-background border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-graphite/70 text-sm">
          {siteContent.footer.copyright}
        </p>
        <nav
          className="flex flex-col gap-2 sm:flex-row sm:gap-6"
          aria-label="Юридические ссылки"
        >
          {siteContent.footer.legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-graphite/80 hover:text-mint text-sm underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
