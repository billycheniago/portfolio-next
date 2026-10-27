import Section from "../Section";
import Pic from "./Pic";
import type { AssetName } from "./assets";

type Pain = { name: AssetName; text: string };

const operational: Pain[] = [
  { name: "pain-1", text: "Manual ticket sales and paper-based records." },
  { name: "pain-2", text: "Bottlenecks at counters during high traffic." },
  { name: "pain-3", text: "Slow end-of-day reconciliation." },
];

const trust: Pain[] = [
  { name: "pain-4", text: "No real-time revenue visibility." },
  { name: "pain-5", text: "Paper tickets could be lost, miscounted, or manipulated." },
  { name: "pain-6", text: "Difficult to confidently audit revenue." },
];

function PainGroup({ items, label }: { items: Pain[]; label: string }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {items.map((p) => (
          <div
            key={p.name}
            className="flex flex-col items-center gap-2 rounded-xl bg-[#FFD866] px-2 py-4 text-center sm:gap-3 sm:px-3"
          >
            <Pic name={p.name} alt="" sizes="64px" className="w-10 sm:w-14" />
            <p className="text-[10px] font-bold leading-snug text-neutral-950 sm:text-xs md:text-[13px]">
              {p.text}
            </p>
          </div>
        ))}
      </div>
      {/* Kurung penghubung antar kartu */}
      <div className="mx-[16.67%] mt-5 h-4 border-x border-b border-neutral-800" aria-hidden />
      <p className="mt-4 text-center text-base font-bold text-neutral-950 md:text-lg">{label}</p>
    </div>
  );
}

const cardClass =
  "rounded-2xl bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.08)] md:p-8";

export default function Challenge() {
  return (
    <Section gray>
      <div className={cardClass}>
        <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-[#e60000] md:text-[22px]">
          The challenge
        </h2>
        <p className="mt-4 max-w-5xl text-sm leading-relaxed text-neutral-800 md:text-base">
          Tourist attractions and local governments ran ticketing on paper. Daily sales were
          reported by phone or inferred from stacks of sold tickets, counters jammed at peak
          hours, and end-of-day reconciliation was slow. Revenue was hard to audit and open to
          under-reporting. The MVP also had a fixed deadline: a demo-ready product for the
          SMESCO exhibition in June 2024.
        </p>
      </div>

      <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-2 md:gap-6">
        <PainGroup items={operational} label="Operational pain" />
        <PainGroup items={trust} label="Trust and governance pain" />
      </div>

      <div className={`${cardClass} mt-12`}>
        <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-[#16a349] md:text-[22px]">
          The solution
        </h2>
        <p className="mt-4 max-w-5xl text-sm leading-relaxed text-neutral-800 md:text-base">
          Furtuna and Ayogo as one integrated system. Visitors book online with Ayogo or buy
          on-site at a Furtuna kiosk, staff issue tickets at a POS, and every transaction flows
          into a role-based dashboard where partners and governments see sales in real time.
        </p>
      </div>
    </Section>
  );
}
