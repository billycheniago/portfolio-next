"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Counter from "@/components/Counter";

const stats = [
  { to: 6, suffix: "", label: "Years experience" },
  { to: 6, suffix: "", label: "Multi-Industry Clients" },
  { to: 20, suffix: "", label: "Delivered Projects" },
  { to: 95, suffix: "%", label: "Client Satisfaction" },
];

export default function Hero() {
  return (
    <section id="home" className="dot-grid flex min-h-screen items-center">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-8 pb-20 pt-32 md:grid-cols-[1.15fr_1fr]">
        {/* Kolom kiri: teks */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-center lg:text-left text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-neutral-900 lg:text-[3.5rem]">
            Designing for
            <br />
            business goals,
            <br />
            <span className="bg-linear-to-b from-accent-from to-accent-to bg-clip-text text-transparent">
              built for user needs
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-center lg:text-left text-base sm:text-lg leading-relaxed text-neutral-600">
            6+ years designing end-to-end digital products across web, mobile,
            and physical touchpoint systems, growing from UI/UX Designer into
            full product ownership as a Product Designer.
          </p>

          <div className="mt-10 grid max-w-lg grid-cols-2 gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl lg:text-3xl font-bold tabular-nums text-neutral-900">
                  <Counter to={stat.to} suffix={stat.suffix} />
                  <span className="text-accent">+</span>
                </p>
                <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Kolom kanan: kartu foto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="w-full max-w-sm justify-self-center md:justify-self-end"
        >
          <div className="rounded-[2rem] bg-white p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
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
            </div>
            <p className="mt-4 text-center font-hand text-2xl font-bold text-neutral-600">
              Based in Jakarta, Indonesia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
