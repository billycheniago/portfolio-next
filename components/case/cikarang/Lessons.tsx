import { History, ShieldCheck, Wand2 } from "lucide-react";
import Section, { SectionHeading } from "../Section";

const lessons = [
  { icon: ShieldCheck, title: "The call I'd defend", text: "A home screen that answers “How much am I using?” and “What should I do next?”, with core tasks one or two taps away, kept a complex system feeling simple." },
  { icon: History, title: "What I'd do differently", text: "When work resumes, I'd run short, task-based usability sessions on onboarding and multi-ID management, token purchase and complaints, measure completion and time, and refine labels, error states and the home layout where people hesitate. In parallel I'd design robust states for payments, token delivery and service handling, so the app supports customers when something goes wrong, not only when everything works." },
  { icon: Wand2, title: "What changed in my practice", text: "Reviewing the requirement documents and integration diagrams before designing anything is what let the flows fit a new vending system, payment gateway and SAP/CRM." },
];

export default function Lessons() {
  return (
    <Section>
      <SectionHeading title="Three lessons I carry forward" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {lessons.map((l) => (
          <div key={l.title} className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e60000] text-white"><l.icon size={22} /></span>
            <h3 className="mt-4 text-lg font-bold text-neutral-950">{l.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">{l.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
