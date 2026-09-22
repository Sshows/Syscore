type PlanBadgeProps = {
  label: string;
};

export function PlanBadge({ label }: PlanBadgeProps) {
  return (
    <span className="border-mint/30 bg-mint/10 text-mint inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold tracking-[0.18em] uppercase">
      <span className="signal-dot h-1.5 w-1.5 rounded-full bg-mint" />
      {label}
    </span>
  );
}
