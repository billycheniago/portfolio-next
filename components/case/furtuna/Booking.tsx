import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";
import type { AssetName } from "./assets";

const steps: { n: number; name: AssetName; w: string; title: string; text: string; alt: string }[] = [
  { n: 1, name: "booking-discover", w: "max-w-[420px]", title: "Discover & choose destination", text: "Browse destinations, compare prices and highlights, then open the details.", alt: "Ayogo explore and destination detail screens" },
  { n: 2, name: "booking-date", w: "max-w-[260px]", title: "Choose date & tickets", text: "Pick a date and quantities while the total updates live, so there are no price surprises.", alt: "Ayogo date and ticket selection screen" },
  { n: 3, name: "booking-pay", w: "max-w-[260px]", title: "Confirm & pay", text: "Review the order, then pay with familiar methods: e-money, VA or bank transfer.", alt: "Ayogo payment detail screen" },
  { n: 4, name: "booking-qr", w: "max-w-[420px]", title: "Get QR & manage booking", text: "The QR e-ticket stays in the Booking tab; scan it at the kiosk to print.", alt: "Ayogo booking list and QR e-ticket screens" },
];

export default function Booking() {
  return (
    <Section gray>
      <SectionHeading
        title="Online booking with Ayogo"
        subtitle="I designed a single, continuous flow from discovering destinations to a QR e-ticket redeemed at the Furtuna kiosk. The goal was a predictable journey: pick a place → choose a date and tickets → pay → get a QR."
      />
      <ol className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="flex flex-col items-center text-center">
            <div className={`w-full ${s.w}`}>
              <Pic name={s.name} alt={s.alt} sizes="(min-width: 1024px) 300px, 70vw" />
            </div>
            <span className="mt-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#e64406] text-sm font-bold text-white">
              {s.n}
            </span>
            <h3 className="mt-3 text-base font-bold text-neutral-950">{s.title}</h3>
            <p className="mt-1 max-w-xs text-sm text-neutral-600">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
