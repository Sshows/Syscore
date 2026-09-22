import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/content/site-content";

export function Positioning() {
  const { positioning } = siteContent;

  return (
    <section
      id={positioning.id}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {positioning.title}
        </h2>
        <p className="text-graphite/75 mt-4 max-w-3xl text-base leading-7">
          {positioning.description}
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {positioning.cards.map((card) => (
          <Reveal key={card.number}>
            <article className="border-graphite/10 h-full rounded-3xl border bg-white p-6 transition-transform duration-200 hover:-translate-y-1 motion-reduce:transform-none sm:p-8">
              <p className="text-mint text-sm font-semibold tracking-[0.18em]">
                {card.number}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{card.title}</h3>
              <p className="text-graphite/75 mt-4 text-sm leading-7">
                {card.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
