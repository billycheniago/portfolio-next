import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";
import type { AssetName } from "./assets";

const screens: { name: AssetName; alt: string }[] = [
  { name: "ui-splash", alt: "Splash screen" },
  { name: "ui-onboarding", alt: "Onboarding" },
  { name: "ui-home", alt: "Home with usage chart and shortcuts" },
  { name: "ui-tokens", alt: "Token and payment with meter list" },
  { name: "ui-buy", alt: "Buy token screen" },
  { name: "ui-pay", alt: "Payment with BCA virtual account" },
  { name: "ui-detail", alt: "Transaction detail" },
  { name: "ui-history", alt: "Transaction history" },
];

export default function HiFi() {
  return (
    <Section>
      <SectionHeading
        title="4. UI exploration and hi-fi screens"
        subtitle="Explored ways to present usage, token history and service actions, then designed the home dashboard, token and payment flows, complaints, and new connection and power change modules for mobile and web."
      />
      <div className="mt-10 grid grid-cols-2 items-start gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6 md:gap-y-10">
        {screens.map((s) => (
          <Pic key={s.name} name={s.name} alt={s.alt} sizes="(min-width: 768px) 300px, 50vw" className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)]" />
        ))}
      </div>
    </Section>
  );
}
