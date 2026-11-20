"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { guideGreeting, guideInterests, guideQuestions, type GuideLink, type GuideReply } from "@/data/guide";
import { NekoAvatar } from "./NekoFace";

type Msg = ({ id: number; from: "neko" } & GuideReply) | { id: number; from: "me"; text: string };

const greeting = (): Msg[] => [{ id: 0, from: "neko", text: guideGreeting }];

const chipCls =
  "rounded-full border border-[#F0762A]/45 bg-white px-3.5 py-2 text-left text-sm text-neutral-900 transition-colors hover:bg-[#FFF1E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:bg-[#3a2a1c]";
const nekoBubble = "max-w-[88%] rounded-2xl rounded-tl-md bg-[#FFF1E3] px-4 py-3 text-sm leading-relaxed text-neutral-900 dark:bg-[#3a2a1c]";
const linkRow =
  "flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-left text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function GuidePanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);
  const [msgs, setMsgs] = useState<Msg[]>(greeting);

  // onClose berubah identitas tiap Neko re-render (kedip, gerak mata); simpan di ref
  // supaya efek di bawah tidak jalan ulang dan mereset percakapan.
  const closeRef = useRef(onClose);
  useEffect(() => {
    closeRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;
    setMsgs(greeting());
    idRef.current = 1;
    ref.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const close = () => closeRef.current();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onDown = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      if (ref.current?.contains(t)) return;
      if (t.closest?.("[aria-haspopup='dialog']")) return; // tombol Neko menanganinya sendiri
      close();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  // Gulir agar pertanyaan terbaru ada di bagian atas area chat, sehingga jawabannya
  // langsung terbaca di bawahnya tanpa perlu menggulir ke atas lagi.
  useEffect(() => {
    const el = bodyRef.current;
    if (!el || msgs.length < 2) return;
    const q = el.querySelector<HTMLElement>("[data-latest-q]");
    if (q) {
      const top = q.getBoundingClientRect().top - el.getBoundingClientRect().top + el.scrollTop - 12;
      el.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    }
    el.querySelector<HTMLButtonElement>("[data-chips] button")?.focus({ preventScroll: true });
  }, [msgs.length, reduce]);

  const ask = (label: string, reply: GuideReply) => {
    const a = idRef.current++;
    const b = idRef.current++;
    setMsgs((m) => [...m, { id: a, from: "me", text: label }, { id: b, from: "neko", ...reply }]);
  };

  const last = msgs[msgs.length - 1];
  const lastMeId = [...msgs].reverse().find((m) => m.from === "me")?.id;
  const showInterests = last.from === "neko" && last.chips === "interests";

  const Row = ({ l }: { l: GuideLink }) => {
    const inner = (
      <>
        <span>
          <span className="block font-medium">{l.label}</span>
          {l.meta && <span className="block text-xs text-neutral-700">{l.meta}</span>}
        </span>
        <ArrowUpRight size={16} aria-hidden className="shrink-0" />
      </>
    );
    return l.external ? (
      <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkRow}>
        {inner}
      </a>
    ) : (
      <Link href={l.href} onClick={onClose} className={linkRow}>
        {inner}
      </Link>
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          role="dialog"
          aria-label="Neko's quick guide"
          tabIndex={-1}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.97 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          style={{ transformOrigin: "bottom right" }}
          className="fixed bottom-28 right-5 z-[61] flex max-h-[min(75vh,600px)] w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-3xl bg-white text-neutral-900 shadow-[0_12px_40px_rgba(0,0,0,0.22)] ring-1 ring-black/10 outline-none md:bottom-32 md:right-8"
        >
          <div className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF1E3] dark:bg-[#3a2a1c]">
              <NekoAvatar className="h-8 w-8" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-base font-semibold leading-tight">Neko</h2>
              <p className="text-xs text-neutral-700">Billy&apos;s cat · quick guide</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close quick guide"
              className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-accent"
            >
              <X size={16} aria-hidden />
            </button>
          </div>

          <div ref={bodyRef} aria-live="polite" className="flex min-h-[200px] flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
            {msgs.map((m) =>
              m.from === "me" ? (
                <div key={m.id} data-latest-q={m.id === lastMeId ? "" : undefined} className="max-w-[85%] self-end rounded-2xl rounded-tr-md bg-[#B8500F] px-4 py-2.5 text-sm text-[#fff]">
                  {m.text}
                </div>
              ) : (
                <div key={m.id} className="flex flex-col gap-2">
                  {(m.text || m.points) && (
                    <div className={nekoBubble}>
                      {m.text && <p>{m.text}</p>}
                      {m.points && (
                        <ul className="flex flex-col gap-2.5">
                          {m.points.map((p) => (
                            <li key={p.h}>
                              <span className="block font-medium">{p.h}</span>
                              <span className="block text-neutral-700">{p.p}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                  {m.links && (
                    <div className="flex flex-col gap-2">
                      {m.links.map((l) => (
                        <Row key={l.href} l={l} />
                      ))}
                    </div>
                  )}
                </div>
              ),
            )}

            <div data-chips className="mt-1 flex flex-wrap gap-2">
              {showInterests
                ? guideInterests.map((i) => (
                    <button
                      key={i.href}
                      type="button"
                      className={chipCls}
                      onClick={() =>
                        ask(i.label, {
                          text: `Start with ${i.title}. ${i.text}`,
                          links: [{ label: "Open case study", href: i.href }],
                        })
                      }
                    >
                      {i.label}
                    </button>
                  ))
                : guideQuestions.map((q) => (
                    <button key={q.id} type="button" className={chipCls} onClick={() => ask(q.q, q.reply)}>
                      {q.q}
                    </button>
                  ))}
            </div>
          </div>

          <p className="border-t border-neutral-200 px-4 py-2.5 text-xs text-neutral-700">Pre-written answers. Tap a question above.</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
