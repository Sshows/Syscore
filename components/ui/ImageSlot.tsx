import { siteContent } from "@/content/site-content";
type ImageSlotProps = { id: (typeof siteContent.imageSlots)[number]["id"] };
export function ImageSlot({ id }: ImageSlotProps) { const slot = siteContent.imageSlots.find((item) => item.id === id); if (!slot) return null; return <div className="image-slot rounded-3xl p-6"><p className="text-[10px] font-bold tracking-[.18em] text-mint">{slot.label}</p><p className="mt-16 max-w-xs text-sm leading-6 text-white/40">{slot.note}</p></div>; }
