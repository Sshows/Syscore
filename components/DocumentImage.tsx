"use client";
import Image from "next/image";
import { useState } from "react";
import type { Certificate } from "@/content/certificates";
import { certificateBlurs } from "@/content/certificate-blurs";
import { redesign } from "@/content/site-content";
export function DocumentImage({
  certificate,
  lightbox = false,
}: {
  certificate: Certificate;
  lightbox?: boolean;
}) {
  const [missing, setMissing] = useState(false);
  if (missing)
    return (
      <p className="document-missing" role="status">
        {redesign.gallery.missing}
      </p>
    );
  return (
    <Image
      src={`/certificates/${certificate.image}`}
      alt={certificate.title}
      fill
      sizes={
        lightbox
          ? "(max-width:800px) 95vw, 1100px"
          : "(max-width:480px) 90vw, (max-width:1100px) 45vw, 30vw"
      }
      placeholder={lightbox ? "empty" : "blur"}
      blurDataURL={certificateBlurs[certificate.id]}
      quality={lightbox ? 85 : 75}
      onError={() => setMissing(true)}
    />
  );
}
