import { PlanBadge } from "@/components/ui/PlanBadge";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/content/site-content";

export function Education() {
  const { education } = siteContent;

  return (
    <section
      id={education.id}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <Reveal>
        <PlanBadge label="Планируется" />
        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          {education.title}
        </h2>
        <p className="text-graphite/75 mt-4 max-w-3xl text-base leading-7">
          {education.description}
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {education.items.map((item) => (
          <Reveal key={item.number}>
            <article className="border-graphite/10 h-full rounded-3xl border p-6">
              <p className="text-mint text-sm font-semibold tracking-[0.18em]">
                {item.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="text-graphite/75 mt-3 text-sm leading-7">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <article className="bg-graphite/[0.03] rounded-3xl p-6 sm:p-8">
          <h3 className="text-xl font-semibold">
            {education.cooperation.title}
          </h3>
          <p className="text-graphite/75 mt-4 max-w-3xl text-sm leading-7">
            {education.cooperation.text}
          </p>
        </article>
      </Reveal>
    </section>
  );
}
