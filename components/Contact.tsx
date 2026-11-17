"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

// GANTI dengan email Anda yang sebenarnya
const EMAIL = "billychen105@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/billycheniago";

function LinkedInMark({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${EMAIL}?subject=Hello%20Billy`}
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-b from-accent-from to-accent-to px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/40 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Contact Me <ArrowUpRight size={18} />
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Billy on LinkedIn (opens in a new tab)"
            className="group inline-flex items-center gap-2.5 rounded-full border border-neutral-300 bg-white px-7 py-4 text-base font-semibold text-neutral-900 transition hover:-translate-y-0.5 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-lg hover:shadow-[#0A66C2]/30"
          >
            <span className="text-[#0A66C2] transition group-hover:text-white">
              <LinkedInMark />
            </span>
            LinkedIn
            <ArrowUpRight size={16} className="opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
