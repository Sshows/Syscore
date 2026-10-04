import type { NextConfig } from "next";
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];
const nextConfig: NextConfig = {
  output: "standalone",
  images: { formats: ["image/avif", "image/webp"], qualities: [75, 85] },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'none'; frame-ancestors 'none'",
          },
        ],
      },
      {
        source: "/certificates/:file*.pdf",
        headers: [{ key: "Content-Type", value: "application/pdf" }],
      },
    ];
  },
};
export default nextConfig;
