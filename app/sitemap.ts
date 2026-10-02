import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const siteUrl = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    ...["services", "company", "education", "contact"].map((path) => ({
      url: `${siteUrl}/${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/personal-data`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
