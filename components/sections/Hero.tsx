import { ButtonLink } from "@/components/ui/Button";
import { PlanBadge } from "@/components/ui/PlanBadge";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/content/site-content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section id="top" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <PlanBadge label={hero.eyebrow} />
        <h1 className="mt-6 max-w-3xl text-4xl leading-tight font-semibold tracking-tight sm:text-6xl">
          {hero.title}
        </h1>
        <p className="text-mint mt-3 text-xl sm:text-2xl">{hero.subtitle}</p>
        <p className="text-graphite/75 mt-6 max-w-2xl text-base leading-7 sm:text-lg">
          {hero.description}
        </p>
        <div className="mt-10">
          <ButtonLink href={hero.ctaHref}>{hero.ctaLabel}</ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
