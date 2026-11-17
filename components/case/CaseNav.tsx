import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { caseLook } from "./caseLook";

// Urutan sama dengan kartu di beranda. Prev/next berputar, jadi setiap halaman punya keduanya.
const order = ["furtuna", "cikarang", "adippati", "forest-fire"] as const;

function NavCard({ slug, dir }: { slug: string; dir: "prev" | "next" }) {
  const meta = caseStudies[slug];
  const look = caseLook[slug];
  const next = dir === "next";
  const Arrow = next ? ArrowRight : ArrowLeft;
  return (
    <Link
      href={`/case/${slug}`}
      className={`group relative flex flex-col gap-4 overflow-hidden rounded-3xl p-8 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] outline-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)] focus-visible:ring-4 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 active:translate-y-0 active:scale-[0.985] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-10 ${next ? "items-end text-right" : "items-start text-left"}`}
      style={{ background: look.gradient }}
    >
      {/* Label arah, lalu judul dan deskripsi tepat di bawahnya (jarak 16px) */}
      <span className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/80">
        {!next && <Arrow size={16} className="transition group-hover:-translate-x-1" />}
        {next ? "Next case study" : "Previous case study"}
        {next && <Arrow size={16} className="transition group-hover:translate-x-1" />}
      </span>

      <span className={`flex flex-col gap-1.5 ${next ? "items-end" : "items-start"}`}>
        <span className="text-[28px] font-bold leading-[1.1] md:text-[34px]">{meta.title}</span>
        <span className="max-w-[440px] text-[15px] leading-[22px] text-white/85">{meta.description}</span>
      </span>
    </Link>
  );
}

export default function CaseNav({ slug }: { slug: string }) {
  const i = order.indexOf(slug as (typeof order)[number]);
  if (i < 0) return null;
  const prev = order[(i - 1 + order.length) % order.length];
  const next = order[(i + 1) % order.length];
  return (
    <nav aria-label="More case studies" className="border-t border-neutral-200 bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-[26px] font-bold tracking-tight text-neutral-950 md:text-[32px]">Keep exploring</h2>
          <Link href="/#projects" className="text-sm font-semibold text-neutral-600 underline-offset-4 hover:text-neutral-950 hover:underline">
            All work
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <NavCard slug={prev} dir="prev" />
          <NavCard slug={next} dir="next" />
        </div>
      </div>
    </nav>
  );
}
