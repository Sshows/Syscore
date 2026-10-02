"use client";
import { useEffect, useRef, type PointerEvent } from "react";

export function CyberCore() {
  const frame = useRef(0);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);
  function tilt(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const node = event.currentTarget;
    const box = node.getBoundingClientRect();
    const x = (event.clientY - box.top - box.height / 2) / 26;
    const y = (event.clientX - box.left - box.width / 2) / -26;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      node.style.transform = `perspective(900px) rotateX(${x}deg) rotateY(${y}deg)`;
    });
  }
  return (
    <div
      className="core-stage"
      onPointerMove={tilt}
      onPointerLeave={(event) => {
        cancelAnimationFrame(frame.current);
        event.currentTarget.style.transform = "none";
      }}
    >
      <svg
        viewBox="0 0 440 440"
        role="img"
        aria-label="Декоративная концептуальная сеть безопасности"
      >
        <g className="core-lines">
          <path d="M220 220 74 122M220 220 356 84M220 220 372 280M220 220 110 350M220 220 85 255M220 220 305 370" />
          <path d="M74 122 85 255 110 350 305 370 372 280 356 84 74 122" />
        </g>
        <g className="core-rings">
          <circle cx="220" cy="220" r="74" />
          <circle cx="220" cy="220" r="116" />
          <circle cx="220" cy="220" r="166" />
        </g>
        <g className="core-nodes">
          <circle cx="74" cy="122" r="7" />
          <circle cx="356" cy="84" r="6" />
          <circle cx="372" cy="280" r="8" />
          <circle cx="110" cy="350" r="6" />
          <circle cx="85" cy="255" r="5" />
          <circle cx="305" cy="370" r="5" />
        </g>
      </svg>
      <div className="core-center">
        <span className="signal-dot bg-mint h-4 w-4 rounded-full" />
        <span>CORE</span>
      </div>
      <span className="core-label label-a">SYSCORE NODE</span>
      <span className="core-label label-b">KZ / ALMATY</span>
      <span className="core-label label-c">SECURITY CORE</span>
    </div>
  );
}
