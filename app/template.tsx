"use client";
import { motion, useReducedMotion } from "framer-motion";
export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="route-surface"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.35 }}
    >
      {children}
      <div className="route-liquid" aria-hidden="true" />
    </motion.div>
  );
}
