import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";
import type { AssetName } from "./assets";

const decisions: { n: string; tag: string; title: string; img: AssetName; problem: string; chose: string; impact: string }[] = [
  { n: "01", tag: "Kiosk / Entry", title: "Two clear entry paths on the kiosk", img: "decision-01", problem: "Visitors arrived either with an Ayogo booking or with no ticket, and mixing both paths confused the gate.", chose: "A kiosk home with two primary actions, \"Scan booking\" and \"Buy ticket\".", impact: "Staff can guide visitors in one sentence, and fewer people enter the wrong flow." },
  { n: "02", tag: "POS / Pricing", title: "Automatic weekday and weekend pricing", img: "decision-02", problem: "Staff had to remember different prices, which led to mistakes.", chose: "Pricing rules in the POS that apply the right price from the visit date.", impact: "Fewer human errors at the counter and more consistent daily revenue reporting." },
  { n: "03", tag: "Ticketing / Selection", title: "Adult / Child model with numeric tiles", img: "decision-03", problem: "Families needed to buy several tickets quickly without dense forms.", chose: "Two clear categories, Adult and Child, with large numeric tiles for quantity.", impact: "Visitors and staff set quantities in seconds, even with low digital familiarity or in a crowd." },
  { n: "04", tag: "Dashboard / Reporting", title: "A dashboard that matches recap habits", img: "decision-04", problem: "Partners and government officers trusted their paper and Excel recaps and were skeptical of new tools.", chose: "Structure the dashboard on their existing columns and breakdowns, then add filters and real-time data.", impact: "It feels like a familiar upgrade, which makes adoption and audits easier." },
];

export default function Decisions() {
  return (
    <Section>
      <SectionHeading
        title="Design decisions"
        subtitle="Four decisions that improved speed at the gate and trust in the numbers."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {decisions.map((d) => (
          <article key={d.n} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <div className="p-5 pb-0 md:p-6 md:pb-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                <span className="mr-2 text-[#e64406]">{d.n}</span>
                {d.tag}
              </p>
              <h3 className="mt-2 text-lg font-bold text-neutral-950">{d.title}</h3>
            </div>
            <Pic name={d.img} alt={d.title} sizes="(min-width: 768px) 600px, 100vw" className="mt-4" />
            <dl className="space-y-3 p-5 text-sm md:p-6">
              {([["Problem", d.problem], ["Chose", d.chose], ["Impact", d.impact]] as const).map(([k, v]) => (
                <div key={k} className="grid grid-cols-[72px_1fr] gap-3">
                  <dt className={`text-[11px] font-bold uppercase tracking-widest ${k === "Impact" ? "text-green-600" : "text-neutral-500"}`}>{k}</dt>
                  <dd className="text-neutral-800">{v}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}
