import { Building2, HandCoins, LifeBuoy, MapPin, Users, Wallet, type LucideIcon } from "lucide-react";
import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";

const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Users, title: "Staff Management", text: "Add, edit, and deactivate employees who operate kiosks and POS devices at each tourist location." },
  { icon: Building2, title: "Partner & Admin Accounts", text: "Manage partner organizations, their admin users, and the licenses that allow them to run Furtuna at their attractions." },
  { icon: MapPin, title: "Tourist Locations", text: "Create and update tourist locations under each partner so tickets, staff, and revenue are always linked to the right place." },
  { icon: Wallet, title: "Non-Cash Wallet", text: "See real-time non-cash balances and transaction history for each partner, combining income from online and on-site sales." },
  { icon: HandCoins, title: "Disbursement Requests", text: "Let partners request fund withdrawals from their non-cash balance, with superadmins reviewing and processing each request." },
  { icon: LifeBuoy, title: "Help Center", text: "Centralize guides and support so admins can find answers without leaving the dashboard." },
];

export default function DashboardSection() {
  return (
    <Section gray>
      <SectionHeading
        title="Management dashboard"
        subtitle="A role-based web app with three access levels: super admin, partner and location admin. Each sees only the menus that match their job."
      />
      <div className="mt-10">
        <Pic name="dashboard-main" alt="Furtuna management dashboard" sizes="(min-width: 1280px) 1000px, 100vw" className="mx-auto max-w-4xl rounded-2xl" />
      </div>
      <h3 className="mt-14 text-center text-xl font-bold text-neutral-950">Dashboard Features</h3>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e64406]/10 text-[#e64406]">
              <f.icon size={20} />
            </span>
            <h4 className="mt-3 text-base font-bold text-neutral-950">{f.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-neutral-600">{f.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
