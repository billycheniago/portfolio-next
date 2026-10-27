import { ClipboardList, FlaskConical } from "lucide-react";
import Section, { SectionHeading } from "../Section";

const cards = [
  {
    icon: ClipboardList,
    title: "Who I designed for",
    text: "Residents of Cikarang Listrindo's new housing customers, who buy prepaid tokens, need to see their token history and usage, and want one place to manage services instead of bank channels, agents, counters and phone calls.",
  },
  {
    icon: FlaskConical,
    title: "How I worked without formal research",
    text: "I visited the client office with my team, then reviewed requirement documents and integration diagrams to understand how meters, the vending system, the payment gateway and SAP/CRM connect before making any design decision.",
  },
];

export default function Users() {
  return (
    <Section>
      <SectionHeading title="Users and key insight" center />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cards.map((c) => (
          <div key={c.title} className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.04] md:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b3180f] text-white">
              <c.icon size={22} />
            </span>
            <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.08em] text-neutral-950">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-800">{c.text}</p>
          </div>
        ))}
      </div>
      <aside className="mt-6 rounded-2xl border border-[#DDDDDD] bg-[#E17916]/10 p-6 md:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E17916]">Key insight</p>
        <p className="mt-3 text-lg leading-relaxed text-neutral-900 md:text-2xl">
          Residents do not think in vending systems, gateways and CRM. They ask two questions:
          &ldquo;How much am I using?&rdquo; and &ldquo;What should I do next?&rdquo; The app had to
          answer those first and hide the backend complexity.
        </p>
      </aside>
    </Section>
  );
}
