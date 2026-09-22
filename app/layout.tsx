import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteContent } from "@/content/site-content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: siteContent.seo.title,
    template: `%s — ${siteContent.brand.name}`,
  },
  description: siteContent.seo.description,
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    locale: "ru_KZ",
    type: "website",
    siteName: siteContent.brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body className="bg-background text-graphite min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
