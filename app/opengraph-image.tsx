import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteContent } from "@/content/site-content";
export const alt = siteContent.seo.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/brand/syscore-logo-on-navy.png"),
  );
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#0A1020",
        color: "#EAF2FF",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 24,
          color: "#FFB224",
          marginBottom: 50,
        }}
      >
        {siteContent.company.location}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element -- OG renderer requires a native raster image. */}
      <img
        alt="SYSCORE"
        src={`data:image/png;base64,${logo.toString("base64")}`}
        width={1000}
        height={189}
      />
      <div
        style={{
          display: "flex",
          fontSize: 30,
          marginTop: 40,
          color: "#a6b7d0",
        }}
      >
        System Security Core
      </div>
    </div>,
    size,
  );
}
