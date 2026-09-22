import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/content/site-content";

export function About() {
  const { about } = siteContent;

  return (
    <section
      id={about.id}
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
    >
      <Reveal>
        <p className="text-xs font-bold tracking-[.2em] text-mint">ABOUT SYSCORE</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Технологии сильнее, когда за ними — подготовленные люди.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/60">
          {about.lead}
        </p>
        <div className="mt-12 flex max-w-2xl flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[.03] p-5 text-xs font-bold tracking-[.13em]"><span className="text-white/70">TECHNOLOGY</span><span className="text-mint">↔</span><span className="text-white/70">PEOPLE</span><span className="text-mint">↔</span><span className="text-white/70">SECURITY</span></div><h3 className="mt-12 text-xl font-semibold text-white">{about.principlesTitle}</h3>
      </Reveal>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {about.principles.map((principle) => (
          <Reveal key={principle.number}>
            <article className="tech-card h-full rounded-3xl p-6">
              <p className="text-mint text-sm font-semibold tracking-[0.18em]">
                {principle.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                {principle.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
