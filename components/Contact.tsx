"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

// GANTI dengan email Anda yang sebenarnya
const EMAIL = "billychen105@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-neutral-200 px-8 py-28">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <p className="font-hand text-3xl font-bold text-accent">Get in touch</p>

        <h2 className="mt-2 text-4xl font-bold tracking-tighter text-neutral-900 md:text-5xl">
          {"Let's get to know each other!"}
        </h2>

        <p className="mt-5 max-w-2xl text-base sm:text-lg lg:text-lg leading-relaxed text-neutral-500">
          {
            "I'm open to new roles, freelance projects, and collaborations. If you're working on something meaningful, tell me about it. I'd genuinely love to hear it."
          }
        </p>

        <a
          href={`mailto:${EMAIL}?subject=Hello%20Billy`}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-linear-to-b from-accent-from to-accent-to px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/40 transition hover:-translate-y-0.5 hover:brightness-110"
        >
          Contact Me <ArrowUpRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}
