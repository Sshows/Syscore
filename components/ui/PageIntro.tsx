export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="page-intro">
      <p className="system-label">{label}</p>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}
