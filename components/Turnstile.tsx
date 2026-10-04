"use client";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
type Widget = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string;
  remove: (id: string) => void;
  reset: (id: string) => void;
};
declare global {
  interface Window {
    turnstile?: Widget;
  }
}
export function Turnstile({
  siteKey,
  nonce,
  onToken,
  resetKey,
}: {
  siteKey: string;
  nonce?: string;
  onToken: (token: string) => void;
  resetKey: number;
}) {
  const element = useRef<HTMLDivElement>(null),
    id = useRef<string | undefined>(undefined);
  const [ready, setReady] = useState(false),
    [error, setError] = useState(false);
  useEffect(() => {
    if (!ready || !element.current || !window.turnstile) return;
    id.current = window.turnstile.render(element.current, {
      sitekey: siteKey,
      action: "contact",
      theme: "dark",
      callback: onToken,
      "expired-callback": () => onToken(""),
      "error-callback": () => {
        onToken("");
        setError(true);
      },
    });
    return () => {
      if (id.current) window.turnstile?.remove(id.current);
      id.current = undefined;
    };
  }, [ready, siteKey, onToken]);
  useEffect(() => {
    if (id.current) window.turnstile?.reset(id.current);
  }, [resetKey]);
  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        nonce={nonce}
        onReady={() => setReady(true)}
        onError={() => setError(true)}
        strategy="afterInteractive"
      />
      <div ref={element} />
      {error && (
        <p role="alert" className="form-error">
          Не удалось загрузить проверку. Обновите страницу или позвоните.
        </p>
      )}
    </>
  );
}
