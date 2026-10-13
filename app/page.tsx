"use client";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl text-center"
      >
        <h1 className="text-7xl font-semibold tracking-tight">COMING SOON</h1>
        <p className="mt-4 text-lg text-neutral-400">
          My portfolio is currently under construction.
        </p>
      </motion.div>
    </main>
  );
}
