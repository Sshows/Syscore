import type { Metadata } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ExperienceMotion } from "@/components/motion/ExperienceMotion";
import { siteContent } from "@/content/site-content";
import { siteConfig } from "@/config/site";
import "./globals.css";
// Separate subsets retain both alphabets; preload before first paint prevents headline reflow.
const bodyCyr = localFont({
  src: "./fonts/manrope-cyrillic.woff2",
  weight: "200 800",
  variable: "--font-body-cyr",
  display: "block",
  adjustFontFallback: false,
});
const bodyLatin = localFont({
  src: "./fonts/manrope-latin.woff2",
  weight: "200 800",
  variable: "--font-body-latin",
  display: "block",
});
const headingCyr = localFont({
  src: "./fonts/unbounded-cyrillic.woff2",
  weight: "200 900",
  variable: "--font-heading-cyr",
  display: "block",
  adjustFontFallback: false,
});
const headingLatin = localFont({
  src: "./fonts/unbounded-latin.woff2",
  weight: "200 900",
  variable: "--font-heading-latin",
  display: "block",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  title: { default: siteContent.seo.title, template: "%s — SYSCORE" },
  description: siteContent.seo.description,
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    locale: "ru_KZ",
    type: "website",
    siteName: "SYSCORE",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
  },
  icons: { icon: "/brand/syscore-mark.svg", apple: "/brand/apple-icon.png" },
  robots: { index: true, follow: true },
};
export default async function RootLayout({ children }: LayoutProps<"/">) {
  const nonce = (await headers()).get("x-nonce") || undefined;
  const c = siteContent.company;
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SYSCORE",
    legalName: c.legalName,
    url: siteConfig.url,
    logo: siteConfig.url + "/brand/syscore-logo-on-navy.png",
    telephone: c.phone,
    identifier: { "@type": "PropertyValue", propertyID: "BIN", value: c.bin },
    foundingDate: c.registrationISO,
    address: {
      "@type": "PostalAddress",
      addressCountry: c.countryCode,
      addressLocality: c.city,
      streetAddress: c.address,
      postalCode: c.postalCode,
    },
  };
  return (
    <html
      lang="ru"
      className={`${bodyCyr.variable} ${bodyLatin.variable} ${headingCyr.variable} ${headingLatin.variable}`}
    >
      <body>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ExperienceMotion />
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
