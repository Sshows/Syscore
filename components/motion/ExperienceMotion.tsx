"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ExperienceMotion() {
  const cursor = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(pointer: fine)");
    let teardown = () => {};
    const configure = () => {
      teardown();
      teardown = () => {};
      if (preference.matches || !pointer.matches || !cursor.current) return;
      const node = cursor.current;
      let disposed = false;
      let cleanupScroll = () => {},
        pauseScroll = () => {},
        resumeScroll = () => {};
      import("lenis")
        .then(({ default: Lenis }) => {
          if (disposed) return;
          const lenis = new Lenis({
            autoRaf: true,
            lerp: 0.1,
            smoothWheel: true,
            anchors: true,
            prevent: (el) => Boolean(el.closest("dialog,[data-native-scroll]")),
          });
          cleanupScroll = () => lenis.destroy();
          pauseScroll = () => lenis.stop();
          resumeScroll = () => lenis.start();
          if (document.hidden) pauseScroll();
        })
        .catch(() => {
          /* Native scrolling is the fallback. */
        });
      let tx = -100,
        ty = -100,
        x = tx,
        y = ty,
        raf = 0;
      const tick = () => {
        raf = 0;
        if (disposed || document.hidden) return;
        x += (tx - x) * 0.2;
        y += (ty - y) * 0.2;
        node.style.transform = `translate3d(${x}px,${y}px,0)`;
        if (Math.abs(tx - x) + Math.abs(ty - y) > 0.15)
          raf = requestAnimationFrame(tick);
      };
      const move = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;
        tx = event.clientX;
        ty = event.clientY;
        node.classList.add("cursor-visible");
        if (!raf && !document.hidden) raf = requestAnimationFrame(tick);
      };
      const over = (event: PointerEvent) => {
        const element = event.target instanceof Element ? event.target : null;
        node.classList.toggle(
          "cursor-active",
          Boolean(element?.closest("a,button,[data-cursor]")),
        );
      };
      const leave = () => {
        node.classList.remove("cursor-visible");
        cancelAnimationFrame(raf);
        raf = 0;
      };
      const magnets = document.querySelectorAll<HTMLElement>("[data-magnetic]");
      const pull = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;
        const el = event.currentTarget as HTMLElement,
          b = el.getBoundingClientRect();
        el.style.translate = `${(event.clientX - b.x - b.width / 2) * 0.08}px ${(event.clientY - b.y - b.height / 2) * 0.08}px`;
      };
      const reset = (event: PointerEvent) => {
        (event.currentTarget as HTMLElement).style.translate = "0 0";
      };
      const visibility = () => {
        if (document.hidden) {
          leave();
          pauseScroll();
        } else resumeScroll();
      };
      window.addEventListener("pointermove", move, { passive: true });
      window.addEventListener("pointerover", over, { passive: true });
      document.addEventListener("pointerleave", leave);
      document.addEventListener("visibilitychange", visibility);
      magnets.forEach((el) => {
        el.addEventListener("pointermove", pull);
        el.addEventListener("pointerleave", reset);
      });
      teardown = () => {
        disposed = true;
        cleanupScroll();
        leave();
        node.classList.remove("cursor-active");
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerover", over);
        document.removeEventListener("pointerleave", leave);
        document.removeEventListener("visibilitychange", visibility);
        magnets.forEach((el) => {
          el.removeEventListener("pointermove", pull);
          el.removeEventListener("pointerleave", reset);
          el.style.translate = "0 0";
        });
      };
    };
    configure();
    preference.addEventListener("change", configure);
    pointer.addEventListener("change", configure);
    return () => {
      preference.removeEventListener("change", configure);
      pointer.removeEventListener("change", configure);
      teardown();
    };
  }, [pathname]);
  return (
    <div className="custom-cursor" ref={cursor} aria-hidden="true">
      <span />
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m12 3 7 3v5c0 4-3.1 7.2-7 10-3.9-2.8-7-6-7-10V6l7-3Z" />
        <path d="m8.5 11.5 2.2 2.2 4.8-4.8" />
      </svg>
    </div>
  );
}
