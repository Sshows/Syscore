"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="site-shell inner-page">
      <p role="alert" className="my-8 text-2xl">
        Не удалось загрузить страницу.
      </p>
      <button className="action-primary" onClick={reset}>
        Повторить ↻
      </button>
    </div>
  );
}
