import { Check, X } from "lucide-react";
import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";
import type { AssetName } from "./assets";

const items = [
  { n: "01", title: "Buying tokens", before: "Bank channels, agents or counters; no token history in one place", after: "Token purchase and history in one app" },
  { n: "02", title: "Multiple meters", before: "No single place to manage services", after: "One account with a meter switcher" },
  { n: "03", title: "Complaints", before: "Phone or in person, hard to track", after: "A ticket-style list with details and status" },
  { n: "04", title: "New connections and power changes", before: "Phone or in person", after: "Guided step-by-step flows with a final review screen" },
];

const screens: { name: AssetName; title: string; text: string; alt: string }[] = [
  { name: "sol-home", title: "Home", alt: "Home screen", text: "Shows the selected meter, a usage chart, shortcuts to buy tokens, make complaints and access services, and space for news from Cikarang Listrindo." },
  { name: "sol-tokens", title: "Tokens and payment", alt: "Token and payment screen", text: "Token purchase and history, with a meter switcher at the top." },
  { name: "sol-newconn", title: "Complaints", alt: "Complaints list screen", text: "A list of the resident's issues; tap in for details and current status." },
  { name: "sol-complaints", title: "New connection and power change", alt: "New connection form screen", text: "One decision per step, with a summary to check before submitting." },
];

export default function Solution() {
  return (
    <Section gray>
      <SectionHeading title="The solution" subtitle="One app for the everyday tasks of a prepaid electricity customer" center />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map((i) => (
          <div key={i.n} className="rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:p-6">
            <h3 className="text-lg font-bold text-neutral-950">
              <span className="mr-2 text-[#FC7A01]">{i.n}</span>
              {i.title}
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-neutral-50 p-4">
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-neutral-500"><X size={14} /> Before</p>
                <p className="mt-2 text-sm text-neutral-800">{i.before}</p>
              </div>
              <div className="rounded-xl bg-orange-50 p-4">
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#FC7A01]"><Check size={14} /> After</p>
                <p className="mt-2 text-sm text-neutral-800">{i.after}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 md:gap-10">
        {screens.map((s) => (
          <div key={s.title}>
            <Pic name={s.name} alt={s.alt} sizes="(min-width: 640px) 600px, 100vw" className="rounded-2xl" />
            <h3 className="mt-4 text-lg font-bold text-neutral-950">{s.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-neutral-700 md:text-base">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
