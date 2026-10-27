"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

type Props = {
  to: number;
  suffix?: string;
  duration?: number;
  delay?: number;
};

export default function Counter({
  to,
  suffix = "",
  duration = 3,
  delay = 0.4,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;

    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1], // melaju cepat di awal, melambat halus di akhir
      onUpdate: (value) => {
        node.textContent = Math.round(value) + suffix;
      },
    });

    return () => controls.stop();
  }, [inView, to, suffix, duration, delay]);

  return <span ref={ref}>0{suffix}</span>;
}
