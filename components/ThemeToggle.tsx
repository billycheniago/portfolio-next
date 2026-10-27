"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

// Tombol bulat kanan bawah untuk ganti mode terang / gelap.
// Perubahan tema dianimasikan sebagai lingkaran yang membesar dari tombol.
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Sinkronkan dengan class yang sudah dipasang script di <head> (lihat layout.tsx).
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function apply(next: boolean) {
    flushSync(() => setDark(next));
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    const next = !dark;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = (document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    }).startViewTransition;

    if (!start || reduce) {
      apply(next);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = start.call(document, () => apply(next));
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-5 right-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 shadow-[0_6px_24px_rgba(0,0,0,0.18)] transition-transform hover:scale-105 active:scale-95 dark:border-white/25 dark:bg-[#2a2a30] dark:text-[#fff] dark:shadow-[0_6px_24px_rgba(0,0,0,0.6)] md:bottom-8 md:right-8"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
