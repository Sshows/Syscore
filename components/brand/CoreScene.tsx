"use client";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useInView,
} from "framer-motion";
import Link from "next/link";
import { redesign } from "@/content/site-content";
const layers = redesign.coreLayers;
export function CoreScene() {
  const [selected, setSelected] = useState(0);
  const scene = useRef<HTMLDivElement>(null);
  const visible = useInView(scene, { margin: "80px" });
  const reduced = useReducedMotion();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rx = useSpring(x, { stiffness: 70, damping: 22 }),
    ry = useSpring(y, { stiffness: 70, damping: 22 });
  return (
    <div
      className="core-experience"
      ref={scene}
      data-scene-active={visible && !reduced ? "true" : "false"}
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const b = event.currentTarget.getBoundingClientRect();
        x.set((event.clientY - b.top - b.height / 2) / -45);
        y.set((event.clientX - b.left - b.width / 2) / 45);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        className="core-object"
        style={{ rotateX: reduced ? 0 : rx, rotateY: reduced ? 0 : ry }}
      >
        <svg
          viewBox="0 0 640 640"
          role="img"
          aria-label="Интерактивное ядро SYSCORE. Декоративная визуализация, не мониторинг реальных систем."
        >
          <defs>
            <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#EAF2FF" />
              <stop offset=".45" stopColor="#7C95BB" />
              <stop offset="1" stopColor="#273d61" />
            </linearGradient>
            <radialGradient id="amber-haze">
              <stop stopColor="#FFB224" stopOpacity=".23" />
              <stop offset="1" stopColor="#FFB224" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="glass" x2=".7" y2="1">
              <stop stopColor="#152644" stopOpacity=".8" />
              <stop offset="1" stopColor="#0A1020" />
            </linearGradient>
            <filter id="core-glow">
              <feGaussianBlur stdDeviation="9" />
            </filter>
          </defs>
          <g className="scene-guides" fill="none" stroke="#7C95BB">
            <circle cx="320" cy="320" r="280" />
            <circle cx="320" cy="320" r="236" strokeDasharray="1 15" />
            <path d="M20 320h600M320 20v600" />
            <path d="m78 180 484 280M78 460 562 180" />
          </g>
          <circle cx="320" cy="320" r="190" fill="url(#amber-haze)" />
          <g className="trace-orbit">
            <path
              d="M40 240h82l61 35M600 400h-82l-61-35M250 40v90l30 45M390 600v-90l-30-45"
              stroke="#7C95BB"
              fill="none"
            />
            <circle cx="122" cy="240" r="4" fill="#FFB224" />
            <circle cx="518" cy="400" r="4" fill="#FFB224" />
          </g>
          <path
            d="m320 100 190 110v220L320 540 130 430V210z"
            fill="url(#glass)"
            stroke="#33496b"
            strokeWidth="1"
          />
          <path
            d="m452 210-132-77-162 94v186l162 94 162-94V278"
            fill="none"
            stroke="url(#metal)"
            strokeWidth="12"
          />
          <g className="inner-core">
            <path
              d="m320 205 115 115-115 115-115-115z"
              fill="#112039"
              stroke="#5B7BA6"
              strokeWidth="9"
            />
            <path
              d="m320 250 70 70-70 70-70-70z"
              fill="#FFB224"
              opacity=".5"
              filter="url(#core-glow)"
            />
            <path d="m320 270 50 50-50 50-50-50z" fill="#FFB224" />
            <path d="m320 270 50 50-50 50" fill="#E8960C" />
            <path d="m474 226 18 18-18 18-18-18z" fill="#FFB224" />
          </g>
          <motion.circle
            cx={320 + Math.cos((layers[selected].angle * Math.PI) / 180) * 270}
            cy={320 + Math.sin((layers[selected].angle * Math.PI) / 180) * 270}
            r="7"
            fill="#FFB224"
            animate={
              reduced || !visible ? { opacity: 1 } : { opacity: [0.5, 1, 0.5] }
            }
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      </motion.div>
      <div className="core-layer-control">
        <p>{redesign.hero.hint}</p>
        <div role="group" aria-label="Направления ядра">
          {layers.map((layer, index) => (
            <button
              type="button"
              key={layer.label}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              {layer.label}
            </button>
          ))}
        </div>
        <div className="core-context" aria-live="polite" aria-atomic="true">
          <p>{layers[selected].summary}</p>
          <span>{layers[selected].result}</span>
          <Link href={layers[selected].href}>
            {layers[selected].action} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
