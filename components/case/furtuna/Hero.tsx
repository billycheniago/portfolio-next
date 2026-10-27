import Pic from "./Pic";

const info = [
  { label: "Role", value: "Product Designer + Product Manager" },
  { label: "Users", value: "Visitors · Ticket staff · Government and partners" },
  { label: "Key date", value: "MVP demo at SMESCO, June 2024" },
];

export default function Hero() {
  return (
    <section className="bg-white px-5 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <p className="text-sm font-semibold text-neutral-500 md:text-base">
            Furtuna &amp; Ayogo - Project Case Study
          </p>
          <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-5xl lg:text-[52px]">
            Under 2-Minute Ticketing for Tourist Attractions
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-neutral-900 md:text-xl">
            One system for kiosk, POS, online booking, and live dashboards to replace paper
            tickets and phone-call reporting.
          </p>
        </div>

        <dl className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
          {info.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-neutral-300 bg-white p-5 shadow-sm"
            >
              <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-700">
                {item.label}
              </dt>
              <dd className="mt-3 text-sm font-bold text-neutral-950 md:text-base">{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 md:mt-14">
          <Pic
            name="hero"
            alt="Furtuna system: management dashboard on desktop, staff POS on tablet and Ayogo booking app on phone"
            sizes="(min-width: 1280px) 1240px, 100vw"
            priority
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
