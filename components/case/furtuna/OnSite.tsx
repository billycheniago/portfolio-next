import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";
import type { AssetName } from "./assets";

const screens: { name: AssetName; caption: string }[] = [
  { name: "onsite-1", caption: "POS: Adult / Child ticket selection" },
  { name: "onsite-2", caption: "Cash payment method" },
  { name: "onsite-3", caption: "QRIS payment" },
  { name: "onsite-4", caption: "Ticket booking scan" },
  { name: "onsite-5", caption: "Ticket booking scan results" },
  { name: "onsite-6", caption: "Dashboard overview" },
];

export default function OnSite() {
  return (
    <Section>
      <SectionHeading
        title="On-site purchase & redemption with Furtuna"
        subtitle="The POS supports both paths, scanning a booking or selling on the spot, without overwhelming staff."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {screens.map((s) => (
          <figure key={s.name}>
            <Pic name={s.name} alt={s.caption} sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="rounded-2xl" />
            <figcaption className="mt-2 text-center text-sm text-neutral-600">{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
