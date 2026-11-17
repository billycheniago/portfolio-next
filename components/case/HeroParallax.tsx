"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

// Hero: isi bergerak sedikit lebih lambat dari halaman dan memudar halus saat di-scroll.
export default function HeroParallax({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.25]);
  return (
    <section ref={ref} className={`overflow-hidden ${className ?? ""}`} style={style}>
      <motion.div style={{ y, opacity }}>{children}</motion.div>
    </section>
  );
}
