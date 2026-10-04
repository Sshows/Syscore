import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { redesign, siteContent } from "@/content/site-content";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div>
          <Link href="/" aria-label="SYSCORE — главная">
            <BrandLogo />
          </Link>
          <p>{redesign.footer.status}</p>
        </div>
        <nav aria-label="Страницы сайта">
          {redesign.menu.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-contact">
          <a href={siteContent.company.phoneHref}>
            {siteContent.company.phone}
          </a>
          <span>{siteContent.company.legalName}</span>
          <span>БИН {siteContent.company.bin}</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© SYSCORE · System Security Core</p>
        <nav aria-label="Информация о данных">
          <Link href="/privacy">Конфиденциальность</Link>
          <Link href="/personal-data">Персональные данные</Link>
        </nav>
      </div>
    </footer>
  );
}
