"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="dot-grid flex min-h-screen items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl text-center"
      >
        <h1 className="text-7xl font-semibold tracking-tight">COMING SOON</h1>
        <p className="mt-4 text-lg text-neutral-400">
          My portfolio is currently under construction.
        </p>
      </motion.div>
    </section>
  );
}
