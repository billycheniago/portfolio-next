import Section, { SectionHeading } from "../Section";

const card = "rounded-2xl bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.08)] md:p-8";

export default function Challenge() {
  return (
    <Section gray>
      <SectionHeading title="Challenge and solution" center />
      <div className="mt-10 space-y-6">
        <div className={card}>
          <h3 className="text-lg font-bold uppercase tracking-[0.12em] text-[#e60000] md:text-[22px]">The challenge</h3>
          <p className="mt-4 text-sm leading-relaxed text-neutral-800 md:text-base">
            Cikarang Listrindo, a private power producer, was expanding from industrial customers
            into residential housing. Residents bought prepaid tokens through bank channels,
            agents or counters, while complaints, new connections and power changes went by phone
            or in person. They could not easily see their token history, were not always sure a
            payment had gone through, and had no single place to manage services. At the same
            time, the company was investing in a new vending system, a bank virtual account
            gateway and an internal SAP/CRM, so the app had to turn a complex backend into
            something residents could use and trust.
          </p>
        </div>
        <div className={card}>
          <h3 className="text-lg font-bold uppercase tracking-[0.12em] text-[#16a349] md:text-[22px]">The solution</h3>
          <p className="mt-4 text-sm leading-relaxed text-neutral-800 md:text-base">
            One resident app on mobile and web. Residents buy tokens and see their history,
            manage several meters from one account, track complaints like tickets, and request
            new connections or power changes through guided flows.
          </p>
        </div>
      </div>
    </Section>
  );
}
