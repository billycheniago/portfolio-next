"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export type LightboxItem = { src: string; w: number; h: number; alt: string; title?: string; caption?: string };

const Ctx = createContext<{ open: (src: string) => void } | null>(null);

export function LightboxProvider({ items, children }: { items: LightboxItem[]; children: ReactNode }) {
  const [index, setIndex] = useState<number | null>(null);
  const [dir, setDir] = useState(1);
  const trigger = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;

  const open = useCallback(
    (src: string) => {
      const i = items.findIndex((it) => it.src === src);
      if (i < 0) return;
      trigger.current = document.activeElement as HTMLElement | null;
      setDir(1);
      setIndex(i);
    },
    [items],
  );
  const close = useCallback(() => {
    setIndex(null);
    trigger.current?.focus?.();
  }, []);
  const go = useCallback(
    (d: number) => {
      setDir(d);
      setIndex((i) => (i === null ? i : (i + d + items.length) % items.length));
    },
    [items.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close, go]);

  const item = index === null ? null : items[index];

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {item && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={item.title ?? item.alt}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4 text-white backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 outline-none transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white active:scale-95"
            >
              <X size={22} />
            </button>

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous screen"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 outline-none transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white active:scale-95 md:left-6"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  aria-label="Next screen"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 outline-none transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white active:scale-95 md:right-6"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={item.src}
                custom={dir}
                className="flex max-w-[92vw] flex-col items-center gap-4"
                initial={{ opacity: 0, x: dir * 40, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: dir * -40, scale: 0.97 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1);
                  else if (info.offset.x > 80) go(-1);
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={item.src}
                  width={item.w}
                  height={item.h}
                  alt={item.alt}
                  sizes="92vw"
                  priority
                  className="h-auto max-h-[78vh] w-auto max-w-[92vw] rounded-xl bg-white object-contain shadow-2xl"
                />
                {(item.title || item.caption) && (
                  <figcaption className="max-w-[640px] text-center text-sm leading-relaxed text-white/80">
                    {item.title && <span className="block text-base font-semibold text-white">{item.title}</span>}
                    {item.caption}
                  </figcaption>
                )}
              </motion.figure>
            </AnimatePresence>

            <p className="absolute bottom-4 text-xs tracking-widest text-white/50" aria-hidden="true">
              {(index ?? 0) + 1} / {items.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}

// Gambar yang bisa diklik untuk diperbesar. Harus berada di dalam LightboxProvider.
export function ZoomImage({
  asset,
  alt,
  sizes,
  className = "",
  style,
  frameClassName = "",
}: {
  asset: { src: string; w: number; h: number };
  alt: string;
  sizes: string;
  className?: string;
  style?: CSSProperties;
  frameClassName?: string;
}) {
  const ctx = useContext(Ctx);
  return (
    <button
      type="button"
      onClick={() => ctx?.open(asset.src)}
      aria-label={`Enlarge: ${alt}`}
      className={`group relative block w-full cursor-zoom-in outline-none transition duration-200 focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-sky-500/80 active:scale-[0.99] motion-reduce:transition-none ${frameClassName}`}
    >
      <Image src={asset.src} width={asset.w} height={asset.h} alt={alt} sizes={sizes} className={className} style={style} />
      <span className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-100 backdrop-blur-sm transition md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
        <ZoomIn size={18} />
      </span>
    </button>
  );
}
