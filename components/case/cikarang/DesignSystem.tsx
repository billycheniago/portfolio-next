import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";

const colors = [
  { hex: "#FFFFFF", dark: false },
  { hex: "#F5F5F5", dark: false },
  { hex: "#707070", dark: true },
  { hex: "#313131", dark: true },
  { hex: "#FC0101", dark: true },
  { hex: "#60CCC2", dark: true },
];

export default function DesignSystem() {
  return (
    <Section gray>
      <SectionHeading
        title="3. Design system"
        subtitle="Created a small system with the brand red, neutral greys and accessible Roboto typography."
      />
      <div className="mt-10">
        <Pic name="type-specimen" alt="Roboto type specimen: Regular, Medium, SemiBold and Bold" sizes="(min-width: 1024px) 1000px, 100vw" className="max-w-4xl" />
      </div>
      <ul className="mt-10 grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4">
        {colors.map((c) => (
          <li
            key={c.hex}
            className="flex aspect-[4/3] items-end justify-center rounded-xl p-3 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            style={{ backgroundColor: c.hex }}
          >
            <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-neutral-900 md:text-xs">
              {c.hex}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
