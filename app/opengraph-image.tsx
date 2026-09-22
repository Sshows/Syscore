import { ImageResponse } from "next/og";
import { siteContent } from "@/content/site-content";

export const alt = siteContent.seo.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#FFFFFF",
        color: "#1E2328",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#3ED6A8",
          marginBottom: 24,
        }}
      >
        Проект готовится к запуску
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 84,
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        {siteContent.brand.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 32,
          marginTop: 16,
          color: "#3ED6A8",
        }}
      >
        {siteContent.brand.fullName}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 24,
          marginTop: 28,
          color: "#5B6168",
          maxWidth: 820,
        }}
      >
        {siteContent.seo.description}
      </div>
    </div>,
    size,
  );
}
