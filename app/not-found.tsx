import Link from "next/link";
export default function NotFound() {
  return (
    <div className="shell page-state">
      <p className="eyebrow">404</p>
      <h1 className="my-8 text-4xl">Страница не найдена.</h1>
      <Link className="button" href="/">
        На главную ↗
      </Link>
    </div>
  );
}
