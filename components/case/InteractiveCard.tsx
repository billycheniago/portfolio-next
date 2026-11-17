"use client";

import type { CSSProperties, ReactNode } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, useReducedMotion, useTransform } from "motion/react";

// Kartu interaktif: muncul bergantian, terangkat saat hover, ada cahaya lembut yang mengikuti kursor,
// dan sedikit mengecil saat ditekan. Semua efek dimatikan jika pengunjung memilih "reduce motion".
export default function InteractiveCard({
  children,
  className = "",
  style,
  index = 0,
  rgb,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  index?: number;
  rgb: string; // warna cahaya, mis. "4,130,111"
  as?: "div" | "article";
}) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glow = useMotionValue(0);
  const alpha = useTransform(glow, (v) => v * 0.12);
  const backgroundImage = useMotionTemplate`radial-gradient(300px circle at ${mx}px ${my}px, rgba(${rgb},${alpha}), transparent 70%)`;
  const Comp = as === "article" ? motion.article : motion.div;

  if (reduce) {
    const Static = as;
    return (
      <Static className={className} style={style}>
        {children}
      </Static>
    );
  }

  return (
    <Comp
      className={className}
      style={{ ...style, backgroundImage }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4, boxShadow: "0 16px 36px rgba(0,0,0,0.10)", transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.985 }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      onPointerEnter={() => animate(glow, 1, { duration: 0.25 })}
      onPointerLeave={() => animate(glow, 0, { duration: 0.3 })}
    >
      {children}
    </Comp>
  );
}
