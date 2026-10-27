import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  children: ReactNode;
  id?: string;
  gray?: boolean; // latar abu-abu muda seperti di desain
  className?: string;
  reveal?: boolean;
};

// Pembungkus satu bagian halaman: latar, jarak atas-bawah, dan lebar konten 1240px.
export default function Section({ children, id, gray = false, className = "", reveal = true }: Props) {
  const inner = <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6">{children}</div>;
  return (
    <section id={id} className={`${gray ? "bg-[#F7F7F7]" : "bg-white"} py-16 md:py-24 ${className}`}>
      {reveal ? <Reveal>{inner}</Reveal> : inner}
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  center = false,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}>
      <h2 className="text-3xl font-bold tracking-tight text-neutral-950 md:text-[40px] md:leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">{subtitle}</p>}
    </div>
  );
}
