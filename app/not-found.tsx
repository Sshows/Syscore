import Link from "next/link";
export default function NotFound() {
  return (
    <div className="site-shell inner-page">
      <p className="system-label">404 / NOT FOUND</p>
      <h1 className="my-8 text-4xl">Страница не найдена.</h1>
      <Link className="action-primary" href="/">
        На главную ↗
      </Link>
    </div>
  );
}
