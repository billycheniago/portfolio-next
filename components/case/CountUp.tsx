"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

// Menghitung naik semua angka di dalam teks, mis. "82", "6 + 1". Teks bukan angka tidak berubah.
export default function CountUp({ value, duration = 1.6 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const parts = value.split(/(\d+)/);
  const hasNumber = parts.length > 1;
  const render = (p: number) => parts.map((x, i) => (i % 2 ? String(Math.round(Number(x) * p)) : x)).join("");

  // Sebelum terlihat: mulai dari nol (HTML awal tetap berisi angka akhir untuk mesin pencari).
  useEffect(() => {
    if (reduce || !hasNumber || !ref.current) return;
    ref.current.textContent = render(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce, hasNumber, value]);

  useEffect(() => {
    const node = ref.current;
    if (!inView || reduce || !hasNumber || !node) return;
    const controls = animate(0, 1, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (p) => {
        node.textContent = render(p);
      },
      onComplete: () => {
        node.textContent = value;
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, hasNumber, value, duration]);

  return (
    <span ref={ref} suppressHydrationWarning>
      {value}
    </span>
  );
}
