import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/content/site-content";

export function About() {
  const { about } = siteContent;

  return (
    <section
      id={about.id}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {about.title}
        </h2>
        <p className="text-graphite/75 mt-4 max-w-3xl text-base leading-7">
          {about.lead}
        </p>
        <h3 className="mt-12 text-xl font-semibold">{about.principlesTitle}</h3>
      </Reveal>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {about.principles.map((principle) => (
          <Reveal key={principle.number}>
            <article className="border-graphite/10 h-full rounded-3xl border p-6">
              <p className="text-mint text-sm font-semibold tracking-[0.18em]">
                {principle.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{principle.title}</h3>
              <p className="text-graphite/75 mt-3 text-sm leading-7">
                {principle.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
