import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import FurtunaCaseStudy from "@/components/case/furtuna/FurtunaCaseStudy";
import CikarangCaseStudy from "@/components/case/cikarang/CikarangCaseStudy";

const pages: Record<string, ComponentType> = {
  furtuna: FurtunaCaseStudy,
  cikarang: CikarangCaseStudy,
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = caseStudies[slug];
  return meta ? { title: meta.title, description: meta.description } : {};
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const Page = pages[slug];
  const meta = caseStudies[slug];
  if (!Page || !meta) notFound();

  return (
    <main className="relative bg-white text-neutral-900">
      {/* Wrapper setinggi 0 yang sticky: pill ikut turun selama halaman di-scroll */}
      <div className="pointer-events-none sticky top-5 z-50 h-0">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6">
          <Link
            href="/#projects"
            className="pointer-events-auto inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm shadow-[0_6px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transition hover:shadow-[0_8px_28px_rgba(0,0,0,0.18)]"
          >
            <ChevronLeft size={16} className="text-neutral-700" />
            <span className="font-semibold text-neutral-900">Work</span>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-500">{meta.name}</span>
          </Link>
        </div>
      </div>
      <Page />
    </main>
  );
}
