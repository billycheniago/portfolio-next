import Pic from "./Pic";

const info = [
  { label: "Role", value: "Product Designer (UX & UI)" },
  { label: "Platform", value: "iOS, Android and responsive web" },
  { label: "Tools", value: "Figma" },
  { label: "Status", value: "MVP built; next phase awaiting client" },
];

export default function Hero() {
  return (
    <section className="bg-white px-5 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <p className="text-sm font-semibold text-neutral-500 md:text-base">
            Cikarang Listrindo - Project Case Study
          </p>
          <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-[#FC0101] sm:text-4xl md:text-5xl lg:text-[52px]">
            One App for Electricity Tokens, Services &amp; Complaints
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-neutral-900 md:text-xl">
            A resident app that turns a complex vending, payment and SAP/CRM backend into one
            simple place to buy tokens, manage meters and get help.
          </p>
        </div>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4 lg:gap-5">
          {info.map((item) => (
            <div key={item.label} className="rounded-2xl border border-neutral-300 bg-white p-5 shadow-sm">
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
            alt="Cikarang Listrindo resident app: splash, onboarding, home and buy-token screens"
            sizes="(min-width: 1280px) 1240px, 100vw"
            priority
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
