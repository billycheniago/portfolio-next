"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.65"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });
  const y = useTransform(progress, [0, 1], [120, 0]);
  const opacity = useTransform(progress, [0, 1], [0, 1]);

  const hasBrand = Boolean(project.logo || project.brand);

  return (
    <motion.article
      ref={ref}
      style={{ y, opacity }}
      className={`keep-light grid overflow-hidden rounded-[1.75rem] md:grid-cols-2 md:rounded-[2rem] ${project.gradient}`}
    >
      {/* Teks */}
      <div className="flex flex-col items-start justify-center gap-5 p-6 md:gap-6 md:p-12">
        {/* Baris atas: logo + chevron (chevron hanya di mobile) */}
        <div
          className={`flex w-full items-center justify-between ${hasBrand ? "" : "md:hidden"}`}
        >
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.brand ?? project.title}
              width={160}
              height={40}
              className="h-8 w-auto"
            />
          ) : project.brand ? (
            <p className="text-2xl font-bold text-white">{project.brand}</p>
          ) : null}
        </div>

        <h3 className="max-w-md text-2xl font-bold leading-tight text-white md:text-4xl">
          {project.title}
        </h3>

        {/* Statistik: 3 kolom di mobile, berjajar di desktop */}
        <div className="grid w-full grid-cols-3 gap-2 md:flex md:w-auto md:flex-wrap md:gap-3">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-black/15 px-3 py-3 md:min-w-28 md:px-4"
            >
              <p className="text-xs text-white/70 md:text-sm">{stat.label}</p>
              <p
                className={`text-base font-bold md:text-xl ${project.valueColor}`}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Tombol: hanya desktop */}
        <a
          href={project.href}
          className="hidden rounded-full bg-white px-6 py-3 text-base font-semibold text-neutral-900 shadow-md transition hover:bg-neutral-100 md:inline-flex"
        >
          View Case Study
        </a>
      </div>

      {/* Mockup: panel berbingkai di mobile, polos di desktop */}
      <div className="relative mx-5 mb-5 min-h-60 overflow-hidden rounded-2xl border border border-white/20 bg-white/10 sm:min-h-72 md:mx-0 md:mb-0 md:min-h-[26rem] md:rounded-none md:border-0 md:bg-transparent">
        {project.image && (
          <div className="absolute bottom-0 left-4 right-4 top-4 md:left-8 md:right-10 md:top-10">
            <Image
              src={project.image}
              alt={`Mockup ${project.title}`}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-contain object-bottom"
            />
          </div>
        )}
      </div>
    </motion.article>
  );
}
