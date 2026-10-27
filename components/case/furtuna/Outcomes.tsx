import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";
import type { AssetName } from "./assets";

const items: { img: AssetName; who: string; headline: string; before: string; after: string }[] = [
  { img: "outcome-visitors", who: "Visitors", headline: "A clearer way in.", before: "Guessing which line and which ticket", after: "Scan a booking or buy on site in a short, predictable flow" },
  { img: "outcome-partners", who: "Partners", headline: "Control, in one place.", before: "Chasing reports", after: "Non-cash balance, transaction history and staff activity in one place, with disbursement requests when ready" },
  { img: "outcome-staff", who: "Ticket staff", headline: "Less maths. More ease.", before: "Manual price and total calculation", after: "Adult / Child tiles, automatic weekday and weekend pricing, clear totals, easier training" },
  { img: "outcome-governments", who: "Governments", headline: "See the whole picture.", before: "Paper stacks and inferred revenue", after: "A real-time view across locations, in a format that matches their existing recaps" },
];

export default function Outcomes() {
  return (
    <Section>
      <SectionHeading
        title="Outcomes & impact"
        subtitle="Faster entry for visitors and more trustworthy revenue numbers for owners. These results come from internal testing, early pilot feedback and the SMESCO exhibition, not post-launch analytics."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((o) => (
          <article key={o.who} className="overflow-hidden rounded-2xl bg-[#FFF9F2] ring-1 ring-black/[0.04]">
            <div className="p-5 pb-0 md:p-6 md:pb-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E17916]">{o.who}</p>
              <h3 className="mt-1 text-xl font-bold text-neutral-950">{o.headline}</h3>
            </div>
            <Pic name={o.img} alt="" sizes="(min-width: 768px) 600px, 100vw" className="mt-4" />
            <dl className="space-y-3 p-5 text-sm md:p-6">
              <div className="grid grid-cols-[64px_1fr] gap-3">
                <dt className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">Before</dt>
                <dd className="text-neutral-800">{o.before}</dd>
              </div>
              <div className="grid grid-cols-[64px_1fr] gap-3">
                <dt className="text-[11px] font-bold uppercase tracking-widest text-green-600">After</dt>
                <dd className="text-neutral-800">{o.after}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}
