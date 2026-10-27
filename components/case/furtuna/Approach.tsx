import { FlaskConical, GitBranch, Lightbulb, Rocket, Search, type LucideIcon } from "lucide-react";
import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";

const steps: { icon: LucideIcon; color: string; title: string; text: string }[] = [
  {
    icon: Search,
    color: "#0ca8df",
    title: "Requirements.",
    text: "Worked with founders, finance and government stakeholders to define the problem and lock the MVP scope.",
  },
  {
    icon: Lightbulb,
    color: "#8954f6",
    title: "IA and low-fi concepts.",
    text: "Mapped information architecture and primary use cases, then got a go-ahead on the mockups from the Product Owner, developers and stakeholders.",
  },
  {
    icon: GitBranch,
    color: "#4266f9",
    title: "Low-fi usability tests.",
    text: "Tested the low-fidelity mockups before moving into visual design.",
  },
  {
    icon: FlaskConical,
    color: "#f6a000",
    title: "Hi-fi design.",
    text: "Designed ticketing, payments, staff operations, reporting and the Ayogo booking journey, working with developers and the hardware vendor on kiosk constraints.",
  },
  {
    icon: Rocket,
    color: "#0fa346",
    title: "SIT, UAT and live validation.",
    text: "System integration testing with developers, internal UAT, then the SMESCO exhibition in June 2024.",
  },
];

export default function Approach() {
  return (
    <Section gray>
      <SectionHeading
        title="Approach"
        subtitle="Five steps from requirements to live validation, on a fixed MVP deadline."
      />

      <ol className="relative mt-12 grid gap-8 md:grid-cols-5 md:gap-6">
        {/* Garis penghubung (desktop) */}
        <div
          aria-hidden
          className="absolute left-[10%] right-[10%] top-9 hidden h-[3px] rounded-full md:block"
          style={{
            background:
              "linear-gradient(90deg, #0ca8df66, #8954f666, #4266f966, #f6a00066, #0fa34666)",
          }}
        />
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="relative flex gap-4 md:flex-col md:items-center md:text-center"
          >
            <span
              className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full text-white shadow-md"
              style={{ backgroundColor: s.color }}
            >
              <s.icon size={30} strokeWidth={2} />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-700 md:mt-4">
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-base font-bold text-neutral-950 md:mt-2">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Diagram IA: bisa digeser ke samping di layar kecil */}
      <div className="mt-14 overflow-x-auto rounded-xl">
        <div className="min-w-[760px]">
          <Pic
            name="ia-diagram"
            alt="Information architecture diagram of the Furtuna admin dashboard"
            sizes="(min-width: 1280px) 1240px, 100vw"
          />
        </div>
      </div>
      <div className="mt-6 overflow-x-auto rounded-[2rem]">
        <div className="min-w-[760px]">
          <Pic
            name="wireframes"
            alt="Low-fidelity wireframes for kiosk, POS and mobile booking screens"
            sizes="(min-width: 1280px) 1240px, 100vw"
          />
        </div>
      </div>
      <p className="mt-3 text-xs text-neutral-500 md:hidden">Swipe sideways to see the full diagram →</p>
    </Section>
  );
}
