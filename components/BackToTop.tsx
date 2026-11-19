"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "motion/react";

// Tombol kecil di atas tombol tema; muncul setelah halaman di-scroll cukup jauh.
export default function BackToTop() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
      className={`fixed bottom-20 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg ring-1 ring-black/10 transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-accent ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={20} aria-hidden />
    </button>
  );
}
