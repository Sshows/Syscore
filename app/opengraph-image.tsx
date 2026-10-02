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
        background: "#0b1013",
        color: "#eef6f3",
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
        {siteContent.company.location}
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
          color: "#a1b3aa",
          maxWidth: 820,
        }}
      >
        {siteContent.seo.description}
      </div>
    </div>,
    size,
  );
}
