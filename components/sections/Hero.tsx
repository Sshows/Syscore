import { ButtonLink } from "@/components/ui/Button";
import { PlanBadge } from "@/components/ui/PlanBadge";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/content/site-content";

export function Hero() {
  const { hero } = siteContent;
  return (
    <section id="top" className="tech-grid relative isolate overflow-hidden border-b border-white/10">
      <div className="mx-auto grid min-h-[720px] max-w-6xl items-center gap-14 px-4 py-28 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        <Reveal><PlanBadge label={hero.eyebrow} /><p className="mt-8 text-xs font-bold tracking-[0.32em] text-mint">SYSTEM SECURITY CORE</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">{hero.title}</h1><p className="mt-5 text-xl font-medium tracking-[0.08em] text-white/75 sm:text-2xl">{hero.subtitle}</p><p className="mt-8 max-w-xl text-base leading-8 text-white/62 sm:text-lg">{hero.description}</p><div className="mt-10 flex flex-wrap items-center gap-5"><ButtonLink href={hero.ctaHref}>{hero.ctaLabel}</ButtonLink><span className="text-xs font-bold tracking-[0.18em] text-white/42">KAZAKHSTAN / PRE-LAUNCH</span></div></Reveal>
        <Reveal className="relative mx-auto w-full max-w-[510px] lg:justify-self-end"><div className="float-slow tech-card relative aspect-square overflow-hidden rounded-[2rem] p-5 sm:p-8"><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0,_transparent_27%,rgb(62_214_168_/_0.15)_28%,transparent_29%,transparent_42%,rgb(255_255_255_/_0.08)_43%,transparent_44%)]" /><div className="scan-line absolute right-0 left-0 h-24 bg-gradient-to-b from-transparent via-mint/10 to-transparent" /><div className="relative flex h-full flex-col justify-between"><div className="flex items-center justify-between text-[10px] font-bold tracking-[0.2em] text-white/55"><span>CORE / 01</span><span className="text-mint">SYSTEM STANDBY</span></div><div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-mint/40 bg-mint/5 shadow-[0_0_75px_rgb(62_214_168_/_0.16)] sm:h-52 sm:w-52"><span className="signal-dot h-4 w-4 rounded-full bg-mint" /><i className="absolute h-[150%] w-px rotate-45 bg-gradient-to-b from-transparent via-mint/70 to-transparent" /><i className="absolute h-[150%] w-px -rotate-45 bg-gradient-to-b from-transparent via-mint/70 to-transparent" /></div><div className="grid grid-cols-3 gap-2 text-[9px] font-bold tracking-[0.15em] text-white/45"><span>TELEMETRY</span><span className="text-center">SIGNAL</span><span className="text-right">READY</span></div></div></div></Reveal>
      </div>
    </section>
  );
}
