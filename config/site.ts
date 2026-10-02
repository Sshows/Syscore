export function resolveSiteUrl(value = process.env.NEXT_PUBLIC_SITE_URL) {
  try {
    const url = new URL(value?.trim() || "https://syscore-blond.vercel.app");
    if (!/^https?:$/.test(url.protocol)) throw new Error("Invalid protocol");
    return url.origin;
  } catch {
    return "https://syscore-blond.vercel.app";
  }
}

export const siteConfig = { url: resolveSiteUrl() };
