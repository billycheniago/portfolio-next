import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";
import type { AssetName } from "./assets";

const personas: {
  avatar: AssetName;
  name: string;
  bg: string;
  who: string;
  pains: string;
  needs: string;
}[] = [
  {
    avatar: "persona-1",
    name: "Visitor",
    bg: "bg-[#F6FBFF]",
    who: "Families, couples and groups; mixed digital skills, often on mobile data",
    pains: "Queues, unclear which ticket to buy, unclear payment",
    needs: "Buy or redeem quickly, understand prices and options",
  },
  {
    avatar: "persona-2",
    name: "Ticket Counter Staff",
    bg: "bg-[#FFFFF8]",
    who: "Counter and gate staff on basic desktop tools",
    pains: "Rush-hour queues, manual cash counting, end-of-day reconciliation",
    needs: "Issue tickets fast, avoid wrong type, price or date, close the day easily",
  },
  {
    avatar: "persona-3",
    name: "Management & government stakeholders",
    bg: "bg-[#FAFEE0]",
    who: "Attraction managers and local-government officers tracking PAD (local revenue)",
    pains:
      "No real-time visibility; paper tickets can be lost or manipulated; hard to prove revenue matched tickets sold",
    needs: "See daily sales and revenue, spot anomalies, back up audits",
  },
];

export default function Users() {
  return (
    <Section>
      <SectionHeading
        title="Users and key insight"
        subtitle="Three groups with very different goals and digital comfort: simple enough for walk-in visitors, strong enough for managers who care about reporting and compliance."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {personas.map((p) => (
          <article
            key={p.name}
            className={`${p.bg} rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.04] md:p-5`}
          >
            <header className="flex items-center gap-4 border-b border-neutral-200 pb-4">
              <div className="w-16 shrink-0 overflow-hidden rounded-xl bg-white p-1 md:w-20">
                <Pic name={p.avatar} alt="" sizes="80px" />
              </div>
              <h3 className="text-sm font-bold text-neutral-950">{p.name}</h3>
            </header>
            {[
              ["Who", p.who],
              ["Biggest pains", p.pains],
              ["What they need", p.needs],
            ].map(([label, text], i) => (
              <div key={label} className={`py-4 ${i < 2 ? "border-b border-neutral-200" : ""}`}>
                <h4 className="text-sm font-bold text-neutral-950">{label}</h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-800">{text}</p>
              </div>
            ))}
          </article>
        ))}
      </div>

      <aside className="mt-8 rounded-2xl border border-[#DDDDDD] bg-[#E17916]/10 p-6 md:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E17916]">Key insight</p>
        <p className="mt-3 max-w-5xl text-lg leading-relaxed text-neutral-900 md:text-2xl">
          Speed at the gate and trust in the numbers had to ship together. A kiosk visitors find
          easy still fails if owners and governments cannot trust the report behind it.
        </p>
      </aside>
    </Section>
  );
}
