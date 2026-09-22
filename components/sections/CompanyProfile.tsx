import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/content/site-content";

export function CompanyProfile() {
  const { company, companyProfile } = siteContent;
  const details = [
    ["BIN", company.bin],
    ["OKED", company.oked],
    ["REGISTERED", company.registrationDate],
    ["FIELD", companyProfile.field],
  ];

  return <section className="tech-grid relative overflow-hidden border-y border-white/10 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-4 sm:px-6"><Reveal><div className="tech-card relative overflow-hidden rounded-[2rem] p-6 sm:p-10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgb(62_214_168_/_0.15),transparent_24rem)]" /><div className="absolute top-10 right-[12%] h-3 w-3 rounded-full bg-mint signal-dot" /><div className="absolute top-[25%] right-[30%] h-2 w-2 rounded-full bg-mint/70" /><div className="absolute top-[18%] right-[13%] h-px w-[17%] rotate-[-25deg] bg-mint/45" /><div className="relative grid gap-10 lg:grid-cols-[1fr_.8fr]"><div><p className="text-xs font-bold tracking-[.22em] text-mint">{companyProfile.title}</p><h2 className="mt-5 text-5xl font-semibold tracking-[-.05em] text-white sm:text-6xl">{companyProfile.label}</h2><p className="mt-3 text-sm font-bold tracking-[.16em] text-white/55">{companyProfile.subtitle}</p><p className="mt-10 text-xs font-bold tracking-[.2em] text-mint">{companyProfile.location}</p></div><div className="relative grid gap-3 self-end">{details.map(([label, value]) => <div key={label} className="flex items-center justify-between border-b border-white/10 py-3 text-xs font-bold tracking-[.12em]"><span className="text-white/45">{label}</span><span className="text-right text-white/90">{value}</span></div>)}</div></div><div className="relative mt-10 flex items-center gap-3 text-[9px] font-bold tracking-[.2em] text-white/38"><span className="h-px flex-1 bg-white/10" />SYSTEM IDENTITY VERIFIED<span className="h-px flex-1 bg-white/10" /></div></div></Reveal></div></section>;
}
