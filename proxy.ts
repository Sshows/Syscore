import { NextRequest, NextResponse } from "next/server";
import { isRetiredDocumentPath } from "@/lib/document-privacy";
export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  if (
    isRetiredDocumentPath(pathname) ||
    (pathname === "/_next/image" &&
      searchParams.getAll("url").some(isRetiredDocumentPath))
  ) {
    return new NextResponse("Document is no longer public.", {
      status: 410,
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
        "Content-Type": "text/plain; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "default-src 'none'; frame-ancestors 'none'",
      },
    });
  }
  if (pathname === "/_next/image") return NextResponse.next();
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const dev = process.env.NODE_ENV === "development";
  const challenge = "https://challenges.cloudflare.com";
  const policy = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${dev ? " 'unsafe-eval'" : ""}`,
    `style-src 'self' 'nonce-${nonce}'`,
    // Motion, Next Image and pointer interactions set style attributes, not inline scripts.
    "style-src-attr 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    `connect-src 'self' ${challenge}${dev ? " ws:" : ""}`,
    `frame-src ${challenge}`,
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
  ].join("; ");
  const headers = new Headers(request.headers);
  headers.set("x-nonce", nonce);
  headers.set("Content-Security-Policy", policy);
  const response = NextResponse.next({ request: { headers } });
  response.headers.set("Content-Security-Policy", policy);
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}
export const config = {
  matcher: [
    "/_next/image",
    "/certificates/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|brand/|certificates/|robots.txt|sitemap.xml|opengraph-image).*)",
  ],
};
