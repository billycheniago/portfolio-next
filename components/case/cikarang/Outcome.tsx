import { Check, X } from "lucide-react";
import Section, { SectionHeading } from "../Section";

const delivered = [
  { tag: "Delivered", title: "Design + MVP", text: "The core journeys, screens and integration concepts as clickable prototypes and decks aligned with Cikarang Listrindo’s roadmap, covering token purchase and history, multi-meter management, complaints, new connections, power changes and early-warning touchpoints. My team built the MVP in parallel with the design." },
  { tag: "Where it stands", title: "MVP finished", text: "The client has not yet provided requirements for the next phase, so there is no usability testing or usage data yet." },
  { tag: "What it gave me", title: "Regulated-domain experience", text: "Experience designing in a complex, regulated domain and turning technical constraints into clear, usable journeys for everyday customers." },
];

export default function Outcome() {
  return (
    <Section gray>
      <SectionHeading
        title="Outcome and project status"
        subtitle="The MVP is built, but the design has not been through usability testing."
        center
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:p-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-green-700"><Check size={13} /> Checked</span>
          <h3 className="mt-4 text-xl font-bold text-neutral-950">What was validated</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">The flows and screens were checked with internal stakeholders, used in discussions with the client and internal teams as a clickable prototype, and presented as a solution concept at the Cikarang Listrindo office. My own team developed the MVP in parallel with the design.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:p-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-red-700"><X size={13} /> Not yet</span>
          <h3 className="mt-4 text-xl font-bold text-neutral-950">What was not</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">Usability testing and usage data. The client has not yet provided the requirements for the next phase, so there are no task-completion or usage results.</p>
        </div>
      </div>
      <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Outcome</p>
      <p className="mt-2 text-sm text-neutral-800 md:text-base">A complete design and a finished MVP build; the next phase is waiting on client requirements.</p>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {delivered.map((c) => (
          <div key={c.title} className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e60000]">{c.tag}</p>
            <h3 className="mt-2 text-xl font-bold text-neutral-950">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">{c.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
