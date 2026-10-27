import { Check, X } from "lucide-react";
import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";
import type { AssetName } from "./assets";

const items: { n: string; title: string; before: string; after: string }[] = [
  { n: "01", title: "Ticket sales", before: "Manual counters and paper tickets", after: "Self-service kiosk and staff POS, tickets printed on the spot" },
  { n: "02", title: "Online", before: "Counter only", after: "Ayogo: pick a place, choose date and tickets, pay, get a QR e-ticket" },
  { n: "03", title: "Reporting and trust", before: "Phone calls and stacks of sold tickets; revenue hard to audit", after: "Real-time dashboard with filters; every transaction logged digitally" },
  { n: "04", title: "Pricing", before: "Staff remember weekday and weekend rates", after: "Applied automatically by visit date" },
];

const products: { name: AssetName; title: string; text: string; alt: string }[] = [
  { name: "solution-ayogo", title: "Ayogo booking", alt: "Ayogo mobile booking app", text: "A predictable journey with the total updating as tickets change, so there are no price surprises." },
  { name: "solution-kiosk", title: "Furtuna kiosk", alt: "Furtuna self-service kiosk", text: "Two primary actions on the home screen, \"Scan booking\" and \"Buy ticket\"; the Ayogo QR is scanned to print physical tickets." },
  { name: "solution-pos", title: "Staff POS", alt: "Staff POS on a tablet", text: "Supports both paths, booking scan and on-the-spot purchase (cash and QR/QRIS), with the same Adult / Child pattern as the kiosk." },
  { name: "solution-dashboard", title: "Management dashboard", alt: "Management dashboard on desktop", text: "A role-based web app for super admin, partner and location admin, covering staff, locations, non-cash wallet, disbursement requests and a help center." },
];

export default function Solution() {
  return (
    <Section>
      <SectionHeading
        title="The solution"
        subtitle="One ecosystem replaces the paper workflow, from online booking to the government dashboard."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map((i) => (
          <div key={i.n} className="rounded-2xl bg-[#F7F7F7] p-5 md:p-6">
            <h3 className="text-base font-bold text-neutral-950 md:text-lg">
              <span className="mr-2 text-[#e64406]">{i.n}</span>
              {i.title}
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4">
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-red-600">
                  <X size={14} /> Before
                </p>
                <p className="mt-2 text-sm text-neutral-800">{i.before}</p>
              </div>
              <div className="rounded-xl bg-white p-4">
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-green-600">
                  <Check size={14} /> After
                </p>
                <p className="mt-2 text-sm text-neutral-800">{i.after}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 md:gap-10">
        {products.map((p) => (
          <div key={p.title}>
            <div className="overflow-hidden rounded-2xl bg-[#F7F7F7]">
              <Pic name={p.name} alt={p.alt} sizes="(min-width: 640px) 600px, 100vw" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-neutral-950">{p.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-neutral-700 md:text-base">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
