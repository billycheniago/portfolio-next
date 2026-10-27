import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";
import type { AssetName } from "./assets";

const rounds: { img: AssetName; title: string; text: string }[] = [
  { img: "testing-sit", title: "System integration testing with developers.", text: "End-to-end scenarios: ticket selection, weekday and weekend pricing, cash and QR/QRIS payments, and printing." },
  { img: "testing-uat", title: "Internal UAT with stakeholders, salespeople and employees.", text: "They simulated real gate and dashboard situations while I watched where they hesitated. Feedback led to tweaks in labels, button states and role-based menus." },
  { img: "testing-smesco", title: "Live validation at SMESCO, June 2024", text: "Government representatives and invited guests tried the full setup: Ayogo booking, kiosk, POS and dashboard. Interest was strongest in the non-cash balance and disbursement features." },
];

export default function Testing() {
  return (
    <Section gray>
      <SectionHeading
        title="Testing and validation"
        subtitle="Three rounds took the MVP from stable in the lab to live in front of real prospects."
      />
      <div className="mt-10 space-y-10 md:space-y-14">
        {rounds.map((r, i) => (
          <div key={r.title} className="grid items-center gap-5 md:grid-cols-2 md:gap-10">
            <div className={i % 2 ? "md:order-2" : ""}>
              <Pic name={r.img} alt={r.title} sizes="(min-width: 768px) 600px, 100vw" className="rounded-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-950 md:text-xl">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700 md:text-base">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
      <aside className="mt-12 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e64406]">Purchase time</p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-800 md:text-base">
          In internal testing, the ticket purchase flow was completed in under 2 minutes. This was an informal observation, not a formally timed study; timed tests at real sites are the next step.
        </p>
      </aside>
    </Section>
  );
}
