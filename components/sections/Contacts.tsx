import { ButtonLink } from "@/components/ui/Button";
import { PlanBadge } from "@/components/ui/PlanBadge";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/content/site-content";

export function Contacts() {
  const { contacts, company } = siteContent;
  const profile = [
    ["BIN", company.bin],
    ["OKED", `${company.oked} · ${company.activity}`],
    ["REGISTERED", company.registrationDate],
    ["LOCATION", company.location],
    ["ADDRESS", company.address],
    ["DIRECTOR", company.director],
  ];
  return <section id={contacts.id} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"><Reveal><PlanBadge label={contacts.status} /><h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-.045em] text-white sm:text-6xl">{contacts.headline}</h2><p className="mt-5 max-w-2xl leading-8 text-white/60">{contacts.description}</p></Reveal><div className="mt-12 grid gap-6 lg:grid-cols-[1fr_.95fr]"><Reveal><article className="tech-card h-full rounded-[2rem] p-6 sm:p-8"><p className="text-xs font-bold tracking-[.2em] text-mint">SYSCORE</p><h3 className="mt-4 text-3xl font-semibold text-white">{company.legalName}</h3><p className="mt-2 text-sm font-bold tracking-[.12em] text-white/50">{company.location}</p><a href={company.phoneHref} className="mt-10 block text-2xl font-semibold tracking-tight text-mint transition hover:text-white sm:text-3xl">{company.phone}</a><ButtonLink href={company.phoneHref} className="mt-7">CALL SYSCORE</ButtonLink><p className="mt-8 text-sm leading-6 text-white/48">{contacts.formNotice}</p></article></Reveal><Reveal><article className="tech-card relative h-full overflow-hidden rounded-[2rem] p-6 sm:p-8"><div className="scan-line absolute top-0 right-0 left-0 h-16 bg-gradient-to-b from-transparent via-mint/10 to-transparent" /><div className="relative space-y-1">{profile.map(([label, value]) => <div key={label} className="border-b border-white/10 py-3"><p className="text-[10px] font-bold tracking-[.18em] text-mint/80">{label}</p><p className="mt-1 text-sm leading-6 text-white/80">{value}</p></div>)}</div></article></Reveal></div></section>;
}
