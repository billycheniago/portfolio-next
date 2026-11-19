"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Languages, MapPin, Sparkles } from "lucide-react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { PointerEvent } from "react";
import Counter from "@/components/Counter";

const stats = [
  { to: 6, plus: true, label: "Years of experience" },
  { to: 4, plus: false, label: "Case studies" },
  { to: 4, plus: false, label: "Industries" },
  { to: 3, plus: false, label: "Platforms" },
];

// Urutan chip: UI/UX Designer lebih menonjol karena itu pengalaman utama.
const roles = ["UI/UX Designer", "Product Designer"];

const lines = [
  { text: "Designing for", gradient: false },
  { text: "business goals,", gradient: false },
  { text: "built for user needs", gradient: true },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Teks bubble saat kursor di atas foto. Ganti di sini kalau mau kalimat lain.
const BUBBLE_TEXT = "Hi, I'm Billy";
const BUBBLE_EMOJI = "👋";

// Sisi belakang kartu foto
const facts = [
  { icon: MapPin, label: "Location", value: "Jakarta, Indonesia" },
  { icon: Languages, label: "Languages", value: "Bahasa Indonesia & English" },
  { icon: Sparkles, label: "Tools", value: "Figma & AI" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  // Kartu foto: flip + bubble sapaan (muncul sebentar saat halaman dibuka, dan saat hover)
  const [flipped, setFlipped] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [intro, setIntro] = useState(false);
  useEffect(() => {
    if (reduce) return;
    const on = setTimeout(() => setIntro(true), 1600);
    const off = setTimeout(() => setIntro(false), 4800);
    return () => {
      clearTimeout(on);
      clearTimeout(off);
    };
  }, [reduce]);
  const showBubble = (hovering || intro) && !flipped;

  // Cahaya titik-titik latar yang mengikuti kursor
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spot = useMotionValue(0);
  const spotMask = useMotionTemplate`radial-gradient(180px circle at ${mx}px ${my}px, #000, transparent 70%)`;
  const spotGlow = useMotionTemplate`radial-gradient(360px circle at ${mx}px ${my}px, rgba(230,68,6,0.07), transparent 70%)`;

  // Kartu foto: miring mengikuti kursor (hanya mouse)
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const cfg = { stiffness: 150, damping: 18, mass: 0.2 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), cfg);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), cfg);
  const sheen = useMotionValue(0);
  const sheenX = useTransform(px, (v) => `${(v + 0.5) * 100}%`);
  const sheenY = useTransform(py, (v) => `${(v + 0.5) * 100}%`);
  const sheenBg = useMotionTemplate`radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.22), transparent 55%)`;

  const onSectionMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const onCardMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: "easeOut" as const },
        };

  return (
    <section
      id="home"
      className="dot-grid flex min-h-screen items-center"
      onPointerMove={onSectionMove}
      onPointerEnter={() => !reduce && animate(spot, 1, { duration: 0.3 })}
      onPointerLeave={() => animate(spot, 0, { duration: 0.4 })}
    >
      {/* Titik-titik berwarna aksen yang menyala di sekitar kursor */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 hidden md:block"
          style={{
            opacity: spot,
            backgroundImage: `radial-gradient(circle, rgba(230,68,6,0.6) 1.2px, transparent 1.7px)`,
            backgroundSize: "24px 24px",
            maskImage: spotMask,
            WebkitMaskImage: spotMask,
          }}
        />
      )}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 hidden md:block"
          style={{ opacity: spot, backgroundImage: spotGlow }}
        />
      )}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-8 pb-20 pt-32 md:grid-cols-[1.15fr_1fr]">
        {/* Kolom kiri: teks */}
        <div>
          <ul className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {roles.map((role, i) => (
              <motion.li
                key={role}
                {...(reduce
                  ? {}
                  : {
                      initial: { opacity: 0, y: 12, scale: 0.94 },
                      animate: { opacity: 1, y: 0, scale: 1 },
                      transition: { duration: 0.5, delay: 0.05 + i * 0.1, ease: EASE },
                    })}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-semibold text-neutral-800 shadow-sm"
              >
                {role}
              </motion.li>
            ))}
          </ul>

          <h1 className="text-center text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-left lg:text-[3.5rem]">
            {lines.map((line, i) => (
              <span key={line.text} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                <motion.span
                  className={`block ${
                    line.gradient
                      ? "bg-linear-to-b from-accent-from to-accent-to bg-clip-text text-transparent"
                      : ""
                  }`}
                  {...(reduce
                    ? {}
                    : {
                        initial: { y: "110%" },
                        animate: { y: 0 },
                        transition: { duration: 0.8, delay: 0.2 + i * 0.12, ease: EASE },
                      })}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            {...rise(0.6)}
            className="mt-6 max-w-lg text-center text-base leading-relaxed text-neutral-600 sm:text-lg lg:text-left"
          >
            6+ years designing end-to-end digital products across web, mobile,
            and physical touchpoint systems, growing from UI/UX Designer into
            full product ownership as a Product Designer.
          </motion.p>

          <motion.div
            {...rise(0.75)}
            className="mx-auto mt-10 grid max-w-lg grid-cols-2 gap-6 border-t border-neutral-200 pt-8 text-center sm:grid-cols-4 lg:mx-0 lg:text-left"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold tabular-nums text-neutral-900 sm:text-3xl lg:text-3xl">
                  <Counter to={stat.to} />
                  {stat.plus && <span className="text-accent">+</span>}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Kolom kanan: kartu foto (masuk, melayang pelan, miring mengikuti kursor, klik untuk flip) */}
        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.15, ease: "easeOut" as const },
              })}
          className="w-full max-w-sm justify-self-center md:justify-self-end"
        >
          <motion.div
            className="relative"
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              onPointerMove={onCardMove}
              onPointerEnter={(e) => {
                if (e.pointerType !== "mouse") return;
                setHovering(true);
                if (!reduce) animate(sheen, 1, { duration: 0.25 });
              }}
              onPointerLeave={() => {
                setHovering(false);
                px.set(0);
                py.set(0);
                animate(sheen, 0, { duration: 0.35 });
              }}
              onClick={() => setFlipped((f) => !f)}
              style={
                reduce
                  ? { transformStyle: "preserve-3d" }
                  : { rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }
              }
              className="relative cursor-pointer rounded-[2rem] has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-accent/60"
            >
              <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 110, damping: 16 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative"
              >
                {/* Depan: foto */}
                <div
                  aria-hidden={flipped}
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                  className="rounded-[2rem] bg-white p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.2)] ring-1 ring-black/5"
                >
                  <div className="relative aspect-[15/16] overflow-hidden rounded-2xl">
                    <Image
                      src="/profile.jpg"
                      alt="Billy Cheniago"
                      fill
                      priority
                      sizes="(min-width: 768px) 384px, 90vw"
                      className="object-cover"
                      loading="eager"
                    />
                    {!reduce && (
                      <motion.div
                        aria-hidden
                        className="pointer-events-none absolute inset-0"
                        style={{ opacity: sheen, backgroundImage: sheenBg }}
                      />
                    )}
                    {/* Bubble sapaan di dekat kepala */}
                    <AnimatePresence>
                      {showBubble && (
                        <motion.div
                          key="bubble"
                          aria-hidden
                          className="pointer-events-none absolute right-3 top-3 z-20 origin-bottom-left"
                          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5, y: 8 }}
                          animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6, y: 4 }}
                          transition={{ type: "spring", stiffness: 380, damping: 22 }}
                        >
                          <div className="rounded-2xl rounded-bl-sm bg-white px-3.5 py-2 text-sm font-bold text-neutral-900 shadow-[0_10px_28px_-8px_rgba(0,0,0,0.35)] ring-1 ring-black/5 sm:text-base">
                            {BUBBLE_TEXT}{" "}
                            <motion.span
                              className="inline-block origin-[70%_70%]"
                              animate={reduce ? undefined : { rotate: [0, 16, -8, 16, -4, 0] }}
                              transition={{ duration: 1.1, delay: 0.25 }}
                            >
                              {BUBBLE_EMOJI}
                            </motion.span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <p className="mt-4 text-center font-hand text-2xl font-bold text-neutral-600">
                    Based in Jakarta, Indonesia
                  </p>
                </div>

                {/* Belakang: info singkat */}
                <div
                  aria-hidden={!flipped}
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                  className="absolute inset-0 flex flex-col rounded-[2rem] bg-white p-7 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.2)] ring-1 ring-black/5"
                >
                  <p className="font-hand text-3xl font-bold text-accent">A bit about me</p>
                  <ul className="flex flex-1 flex-col justify-center gap-6">
                    {facts.map((f) => (
                      <li key={f.label} className="flex items-center gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                          <f.icon size={22} />
                        </span>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                            {f.label}
                          </p>
                          <p className="text-lg font-bold leading-snug text-neutral-900">{f.value}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="text-center text-sm text-neutral-500">Click to flip back</p>
                </div>
              </motion.div>

              {/* Tombol flip tersembunyi: hanya untuk keyboard dan pembaca layar */}
              <button
                type="button"
                aria-label={flipped ? "Flip card back to the photo" : "Flip card to read more about me"}
                aria-pressed={flipped}
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped((f) => !f);
                }}
                className="sr-only"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
