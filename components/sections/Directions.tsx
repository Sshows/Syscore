"use client";

import { useState } from "react";
import { PlanBadge } from "@/components/ui/PlanBadge";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/content/site-content";

export function Directions() {
  const { directions } = siteContent;
  const [openId, setOpenId] = useState<string | null>(
    directions.items[0]?.id ?? null,
  );

  return (
    <section
      id={directions.id}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <Reveal>
        <PlanBadge label={directions.badge} />
        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          {directions.title}
        </h2>
        <p className="text-graphite/75 mt-4 max-w-3xl text-base leading-7">
          {directions.description}
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4">
        {directions.items.map((item) => {
          const open = openId === item.id;
          return (
            <Reveal key={item.id}>
              <article className="border-graphite/10 hover:border-mint/40 rounded-3xl border bg-white transition-colors">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  <div>
                    <p className="text-mint text-xs font-semibold tracking-[0.16em]">
                      {item.number}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-graphite/70 mt-2 text-sm leading-6">
                      {item.summary}
                    </p>
                  </div>
                  <span className="text-mint mt-1" aria-hidden>
                    {open ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="space-y-4 px-5 pb-6 sm:px-7">
                      <p className="text-graphite/75 text-sm leading-7">
                        {item.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {item.concepts.map((concept) => (
                          <li
                            key={concept}
                            className="bg-graphite/5 text-graphite/80 rounded-full px-3 py-1 text-xs"
                          >
                            {concept}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
