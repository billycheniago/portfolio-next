import Section, { SectionHeading } from "../Section";
import Pic from "./Pic";

export default function Approach() {
  return (
    <>
      <Section gray>
        <SectionHeading title="Approach" subtitle="A pragmatic five-step process, shaped by limited time and resources" center />
        <div className="mt-12">
          <SectionHeading
            title="1. Requirements & understanding"
            subtitle="Visited the client office with my team, then reviewed requirement documents and integration diagrams to understand how meters, the vending system, the payment gateway and SAP/CRM connect before making any design decision."
          />
          <figure className="mt-10">
            <Pic name="office-photo" alt="Requirements meeting at the Cikarang Listrindo office" sizes="(min-width: 1280px) 1240px, 100vw" className="rounded-2xl" />
            <figcaption className="mt-3 text-center text-sm italic text-neutral-500">
              Q1 User Requirement - Cikarang Listrindo Office
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="2. User flows & IA"
          subtitle="Mapped journeys for buying tokens, managing multiple meters, submitting complaints and requesting new connections or power changes, then built an information architecture that keeps core tasks within one or two taps of the home screen and hides rarely used options deeper in the menu."
        />
        <div className="mt-10 overflow-x-auto rounded-xl">
          <div className="min-w-[640px]">
            <Pic name="flow-buy-token" alt="Buy token user flow" sizes="(min-width: 1280px) 1240px, 100vw" />
          </div>
        </div>
        <div className="mt-6 overflow-x-auto rounded-xl">
          <div className="min-w-[640px]">
            <Pic name="ia-diagram" alt="Information architecture of the resident app" sizes="(min-width: 1280px) 1240px, 100vw" />
          </div>
        </div>
        <p className="mt-3 text-xs text-neutral-500 md:hidden">Swipe sideways to see the full diagram →</p>
      </Section>
    </>
  );
}
