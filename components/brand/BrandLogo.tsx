import Image from "next/image";
export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return compact ? (
    <Image
      src="/brand/syscore-mark.svg"
      width={48}
      height={48}
      alt="SYSCORE"
      unoptimized
    />
  ) : (
    <Image
      className="brand-logo"
      src="/brand/syscore-logo-on-navy.png"
      alt="SYSCORE"
      width={2226}
      height={420}
      sizes="(min-width:1920px) 240px, 180px"
      unoptimized
      loading="eager"
    />
  );
}
