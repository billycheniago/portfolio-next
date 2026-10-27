import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";
import type { AssetName } from "./assets";

const lessons: { img: AssetName; title: string; text: string }[] = [
  { img: "lesson-1", title: "Protect simplicity at the gate", text: "Public kiosks are noisy and rushed, so the path to a printed ticket has to stay extremely short. Two entry actions, Adult / Child tiles and automatic pricing all serve that rule." },
  { img: "lesson-2", title: "Measure it", text: "I'd run timed usability tests at real sites to find out how long purchases and redemptions actually take, and add lightweight feedback channels for operators and partners so improvements come from daily scenarios, not assumptions." },
  { img: "lesson-3", title: "Trust is a UX requirement", text: "Partners and governments care as much about trusting the numbers as using the UI. Next I'd deepen the dashboard with clearer audit trails, anomaly hints and export formats that match how finance and government teams already report." },
];

export default function Lessons() {
  return (
    <Section gray>
      <SectionHeading title="Three lessons I carry forward" center />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {lessons.map((l) => (
          <div key={l.title} className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <Pic name={l.img} alt="" sizes="64px" className="w-14" />
            <h3 className="mt-4 text-lg font-bold text-neutral-950">{l.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">{l.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
