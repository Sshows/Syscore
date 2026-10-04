"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
export function ExperienceMotion() {
  const cursor = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(pointer: fine)");
    if (preference.matches || !pointer.matches) return;
    let disposed = false,
      cleanupScroll = () => {};
    import("lenis")
      .then(({ default: Lenis }) => {
        if (disposed) return;
        const lenis = new Lenis({
          autoRaf: true,
          lerp: 0.085,
          smoothWheel: true,
          anchors: true,
          prevent: (node) => Boolean(node.closest("dialog")),
        });
        cleanupScroll = () => lenis.destroy();
      })
      .catch(() => {
        /* Native scrolling remains available if the optional module fails. */
      });
    const node = cursor.current!;
    let tx = -100,
      ty = -100,
      x = tx,
      y = ty,
      raf = 0;
    const move = (event: PointerEvent) => {
      tx = event.clientX;
      ty = event.clientY;
      node.classList.add("cursor-visible");
    };
    const over = (event: PointerEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>(
        "a,button,[data-cursor]",
      );
      node.dataset.label = target?.dataset.cursor || (target ? "Открыть" : "");
      node.classList.toggle("cursor-active", Boolean(target));
    };
    const leave = () => node.classList.remove("cursor-visible");
    const tick = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      node.style.transform = `translate3d(${x}px,${y}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    document.addEventListener("pointerleave", leave);
    const magnets = document.querySelectorAll<HTMLElement>("[data-magnetic]");
    const pull = (event: PointerEvent) => {
      const el = event.currentTarget as HTMLElement,
        b = el.getBoundingClientRect();
      el.style.translate = `${(event.clientX - b.x - b.width / 2) * 0.1}px ${(event.clientY - b.y - b.height / 2) * 0.1}px`;
    };
    const reset = (event: PointerEvent) => {
      (event.currentTarget as HTMLElement).style.translate = "0 0";
    };
    magnets.forEach((el) => {
      el.addEventListener("pointermove", pull);
      el.addEventListener("pointerleave", reset);
    });
    const visibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", visibility);
    const stop = () => {
      disposed = true;
      cleanupScroll();
      cancelAnimationFrame(raf);
      node.classList.remove("cursor-visible");
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
    preference.addEventListener("change", stop, { once: true });
    return () => {
      preference.removeEventListener("change", stop);
      stop();
    };
  }, [pathname]);
  return (
    <div className="custom-cursor" ref={cursor} aria-hidden="true">
      <span />
    </div>
  );
}
