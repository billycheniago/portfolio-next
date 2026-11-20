"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import NekoFace from "./NekoFace";
import GuidePanel from "./GuidePanel";

export default function NekoLauncher({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const reduce = useReducedMotion();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [look, setLook] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);
  const [ear, setEar] = useState(false);
  const [bubble, setBubble] = useState<null | "welcome" | "hover">(null);
  const [asleep, setAsleep] = useState(false);

  // Mata mengikuti kursor (hanya perangkat dengan mouse, dan bukan reduced motion)
  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = btnRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const d = Math.hypot(dx, dy) || 1;
        const k = Math.min(1, d / 220) * 2.2;
        setLook({ x: (dx / d) * k, y: (dy / d) * k });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce]);

  // Neko tidur bila tidak diajak interaksi (hover, klik, sentuh, fokus) selama 5 detik.
  // Gerakan mouse di bagian halaman lain tidak membangunkannya.
  const sleepTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hovering = useRef(false);
  const armSleep = () => {
    clearTimeout(sleepTimer.current);
    sleepTimer.current = setTimeout(() => {
      setAsleep(true);
      setLook({ x: 0, y: 0 });
    }, 5000);
  };
  const wake = () => {
    setAsleep(false);
    clearTimeout(sleepTimer.current);
  };
  useEffect(() => {
    if (open) {
      wake();
      return;
    }
    if (!hovering.current) armSleep();
    return () => clearTimeout(sleepTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Kedip acak dan kuping bergerak (tidak saat tidur)
  useEffect(() => {
    if (reduce || asleep) return;
    let t: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    const tick = () => {
      t = setTimeout(() => {
        if (!document.hidden) {
          setBlink(true);
          t2 = setTimeout(() => setBlink(false), 140);
          if (Math.random() < 0.35) {
            setEar(true);
            setTimeout(() => setEar(false), 380);
          }
        }
        tick();
      }, 2800 + Math.random() * 3700);
    };
    tick();
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [reduce, asleep]);

  // Sapaan saat halaman dibuka: sekali per sesi, tampil sekitar 4 detik lalu hilang sendiri
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("neko-hint") === "1";
    } catch {}
    if (seen) return;
    const show = setTimeout(() => {
      setBubble((b) => b ?? "welcome");
      try {
        sessionStorage.setItem("neko-hint", "1");
      } catch {}
    }, 800);
    const hide = setTimeout(() => setBubble((b) => (b === "welcome" ? null : b)), 4800);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  const close = () => {
    onOpenChange(false);
    btnRef.current?.focus();
  };

  return (
    <>
      <GuidePanel open={open} onClose={close} />
      <div className="relative">
        <AnimatePresence>
          {bubble && !open && (
            <motion.div
              role="status"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute bottom-full right-0 mb-3 flex w-max max-w-[240px] items-start gap-3 rounded-2xl bg-[#1f1d1a] py-3 pl-4 pr-3 text-sm leading-snug text-[#fff] shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/15"
            >
              <span>{bubble === "welcome" ? "Hi, I'm Neko. Ask me about Billy's work." : "Ask Neko"}</span>
              {bubble === "welcome" && (
                <button
                  type="button"
                  aria-label="Dismiss"
                  onClick={() => setBubble(null)}
                  className="mt-0.5 shrink-0 rounded-full p-0.5 text-[#fff]/70 hover:text-[#fff] focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <X size={14} aria-hidden />
                </button>
              )}
              <span aria-hidden className="absolute -bottom-1.5 right-[78px] h-3 w-3 rotate-45 rounded-[2px] bg-[#1f1d1a]" />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          ref={btnRef}
          type="button"
          aria-label="Open quick guide with Neko"
          aria-expanded={open}
          aria-haspopup="dialog"
          onPointerEnter={(e) => {
            hovering.current = true;
            wake();
            if (e.pointerType === "mouse") setBubble("hover");
          }}
          onPointerLeave={() => {
            hovering.current = false;
            setBubble(null);
            if (!open) armSleep();
          }}
          onPointerDown={() => {
            wake();
            if (!hovering.current && !open) armSleep();
          }}
          onFocus={wake}
          onBlur={() => {
            if (!open && !hovering.current) armSleep();
          }}
          onClick={() => {
            setBubble(null);
            onOpenChange(!open);
          }}
          whileHover={reduce ? undefined : { scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          style={{ transformOrigin: "50% 100%" }}
          className="block h-[72px] w-[112px] cursor-pointer rounded-2xl drop-shadow-[0_6px_8px_rgba(0,0,0,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <NekoFace look={look} blink={blink} ear={ear} happy={open} asleep={asleep} animate={!reduce} className="h-full w-full" />
        </motion.button>
      </div>
    </>
  );
}
