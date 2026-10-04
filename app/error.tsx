"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="shell page-state">
      <p role="alert" className="my-8 text-2xl">
        Не удалось загрузить страницу.
      </p>
      <button className="button" onClick={reset}>
        Повторить ↻
      </button>
    </div>
  );
}
