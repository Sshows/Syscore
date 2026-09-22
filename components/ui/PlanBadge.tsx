type PlanBadgeProps = {
  label: string;
};

export function PlanBadge({ label }: PlanBadgeProps) {
  return (
    <span className="border-mint/30 bg-mint/10 text-mint inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase">
      {label}
    </span>
  );
}
