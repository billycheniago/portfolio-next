import Section, { SectionHeading } from "../Section";

const decisions = [
  { n: "01", title: "A home screen built around two everyday questions", designed: "A home screen showing the selected meter, a usage chart, shortcuts to buy tokens, make complaints and open services, and space for news from Cikarang Listrindo.", rationale: "I framed the screen around two questions a prepaid customer is likely to have, “How much am I using?” and “What should I do next?”, so usage and the main shortcuts come first instead of a menu of every service.", tradeoff: "Giving usage and shortcuts priority leaves less room for less frequent services and news, which must stay easy to reach without crowding the screen.", validate: "Whether residents find the usage chart and the right shortcut without guidance." },
  { n: "02", title: "One account for multiple meters", designed: "A meter switcher in the token and payment area. Users add several meter IDs to one account and switch between them.", rationale: "A resident can pay for more than one meter, for example a house and a shop. One account with a switcher means one login covers all of them, instead of separate logins.", tradeoff: "The switcher adds a decision to every purchase, and paying for the wrong meter becomes possible, so the active meter has to stay clearly visible before payment.", validate: "Whether users notice which meter is active before they pay." },
  { n: "03", title: "Guided flows for new connections and power changes", designed: "Step-by-step flows with clear labels, one decision per step, and a final review screen before submitting.", rationale: "These requests need a lot of information. Splitting them into steps reduces the load on each screen, and the review screen lets users catch mistakes before they submit.", tradeoff: "More screens than a single form can feel slow for people who know exactly what they need, so progress and going back must be obvious.", validate: "Completion rate and time per flow, and where people drop off." },
  { n: "04", title: "Complaints as trackable cases", designed: "A list of the resident's complaints, a detail view, and a visible status for each, instead of phone-only handling.", rationale: "Complaints were mostly handled by phone or in person, which left residents without a record. A ticket-style list gives them one, and it fits the SAP/CRM the client was introducing.", tradeoff: "A visible status creates an expectation of timely updates, so the app depends on the client’s back office keeping case status current. A status that never changes can hurt trust more than no status.", validate: "Whether residents understand the status labels and check status in the app instead of calling." },
];

const rows = [
  ["What I designed", "designed"],
  ["Design rationale", "rationale"],
  ["Potential trade-off", "tradeoff"],
] as const;

export default function Decisions() {
  return (
    <Section>
      <SectionHeading
        title="Design decisions"
        subtitle="Four decisions that turned a complex backend into concrete UX choices. The design has not been through usability testing yet, so each one lists the expected impact, not a measured result."
        center
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {decisions.map((d) => (
          <article key={d.n} className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex-1 p-5 md:p-6">
              <p className="text-4xl font-medium text-[#b3180f] md:text-5xl">{d.n}</p>
              <h3 className="mt-3 border-b border-neutral-200 pb-4 text-lg font-bold text-neutral-950">{d.title}</h3>
              {rows.map(([label, key]) => (
                <div key={key} className="border-b border-neutral-200 py-4 last:border-0">
                  <h4 className="font-mono text-[11px] font-medium uppercase tracking-widest text-neutral-500">{label}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-800">{d[key]}</p>
                </div>
              ))}
            </div>
            <div className="min-h-28 bg-[#FFEDED] p-5 md:px-6">
              <h4 className="font-mono text-[11px] font-medium uppercase tracking-widest text-neutral-600">To validate</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#c0160d]">{d.validate}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
