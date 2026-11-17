import type { ReactNode } from "react";
import { Bell, ChartLine, ClipboardList, Database, Eye, FileText, LayoutDashboard, Shield, User, Wrench } from "lucide-react";
import Reveal from "../Reveal";
import HeroParallax from "../HeroParallax";
import CountUp from "../CountUp";
import InteractiveCard from "../InteractiveCard";
import { LightboxProvider, ZoomImage } from "../ams/Lightbox";
import type { CaseContent, ScreenGroup } from "../ams/types";

// Mengikuti frame Figma "Forest Fire Command Center — Case study v1 (AMS structure)" (1440 px, konten 1120 px).
const C = {
  red: "#c8102e",
  ink: "#17191d",
  mute: "#5f656c",
  line: "#e9e5dc",
  num: "#f3d9dd",
  pink: "#fceeef",
  cream: "#fbf9f6",
};
const grad = (deg: number) => `linear-gradient(${deg}deg, #c8102e, #8e0c22)`;
const label = "text-[12px] font-semibold leading-[14px] tracking-[0.12em]";

function Section({ bg, id, children }: { bg: string; id?: string; children: ReactNode }) {
  return (
    <section id={id} style={{ background: bg }} className="py-16 md:py-28">
      <Reveal>
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-5 sm:px-6 md:gap-10 lg:px-0">{children}</div>
      </Reveal>
    </section>
  );
}

function Head({ no, eyebrow, title, sub }: { no: string; eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[64px] font-bold leading-[60px] tracking-[-0.03em] md:text-[96px] md:leading-[84px]" style={{ color: C.num }}>
        {no}
      </div>
      <div className="text-[18px] font-semibold italic leading-[27px] md:text-[22px] md:leading-[30px]" style={{ color: C.red }}>
        {eyebrow}
      </div>
      <h2 className="max-w-[860px] text-[32px] font-bold leading-[1.18] tracking-[-0.01em] md:text-[44px] md:leading-[52px]" style={{ color: C.ink }}>
        {title}
      </h2>
      {sub && (
        <p className="max-w-[680px] text-[16px] leading-[1.6] md:text-[18px] md:leading-[28px]" style={{ color: C.mute }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className={`flex items-center gap-2 ${label}`} style={{ color: C.red }}>
      <span className="h-2 w-2 rounded-full" style={{ background: C.red }} />
      {children}
    </div>
  );
}

function Tile({ size, radius, children }: { size: number; radius: number; children: ReactNode }) {
  return (
    <div className="flex shrink-0 items-center justify-center" style={{ width: size, height: size, borderRadius: radius, background: C.pink, color: C.red }}>
      {children}
    </div>
  );
}

function Screens({ g }: { g: ScreenGroup }) {
  const half = g.layout === "half";
  return (
    <div className={half ? "grid gap-8 md:grid-cols-2" : ""}>
      {g.items.map((it) => (
        <figure key={it.asset.src} className="flex flex-col gap-[14px]">
          <div className="overflow-hidden rounded-2xl" style={{ background: "#0d0f13" }}>
            <ZoomImage
              asset={it.asset}
              alt={it.alt}
              sizes={half ? "(min-width:1120px) 544px, (min-width:768px) 50vw, 100vw" : "(min-width:1120px) 1120px, 100vw"}
              className="h-auto w-full"
            />
          </div>
          <figcaption className="flex flex-col gap-0.5">
            <span className="text-[15px] font-semibold leading-[22px]" style={{ color: C.ink }}>
              {it.title}
            </span>
            <span className="text-[14px] leading-5" style={{ color: C.mute }}>
              {it.caption}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

const roleIcons = [Eye, User, Shield, Wrench];
const goalIcons = [Eye, Bell, ChartLine, FileText];
const stepIcons = [ClipboardList, LayoutDashboard, Database, FileText];

export default function ForestFireView({ c }: { c: CaseContent }) {
  const card = { backgroundColor: "#fff", borderColor: C.line } as const;
  return (
    <LightboxProvider
      items={c.screens.groups.flatMap((g) =>
    g.items.map((it) => ({ src: it.asset.src, w: it.asset.w, h: it.asset.h, alt: it.alt, title: it.title, caption: it.caption })),
  )}
    >
    <div className="keep-light font-[family-name:var(--font-source-sans)] text-[#17191d]">
      {/* Hero */}
      <HeroParallax style={{ background: grad(180) }} className="px-5 pb-20 pt-28 text-white sm:px-6 md:pt-24 lg:px-0">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-10 text-center md:gap-14">
          <div className="flex flex-col items-center gap-5">
            <p className="text-[13px] font-semibold leading-4 tracking-[0.2em] text-white/75">{c.hero.eyebrow}</p>
            <h1 className="max-w-[1040px] text-[48px] font-bold leading-[1.02] tracking-[-0.03em] sm:text-[72px] md:text-[104px] md:leading-[104px]">
              {c.hero.title}
            </h1>
            <p className="max-w-[1000px] text-[22px] font-semibold italic leading-[1.3] text-white/90 md:text-[34px] md:leading-[44px]">{c.hero.subtitle}</p>
            <p className="max-w-[640px] text-[17px] leading-[1.5] text-white/90 md:text-[20px] md:leading-[30px]">{c.hero.lead}</p>
          </div>
          <p className="rounded-full bg-white/15 px-5 py-2 text-[13px] font-medium leading-5 md:text-[14px]">{c.hero.status}</p>
        </div>
      </HeroParallax>

      {/* 01 */}
      <Section bg="#fff" id="sec-01">
        <Head no="01" eyebrow={c.overview.eyebrow} title={c.overview.title} sub={c.overview.intro} />
        <div className="grid gap-8 md:grid-cols-2">
          {[c.overview.challenge, c.overview.solution].map((b, i) => (
            <InteractiveCard
              key={b.title}
              index={i}
              rgb="200,16,46"
              className="flex flex-col gap-[14px] rounded-[20px] p-6 md:p-8"
              style={i ? { backgroundColor: C.pink } : { ...card, borderWidth: 1 }}
            >
              <Eyebrow>{b.label}</Eyebrow>
              <h3 className="text-[22px] font-semibold leading-8 md:text-[24px]">{b.title}</h3>
              <p className="text-[16px] leading-[25px]" style={{ color: C.mute }}>
                {b.body}
              </p>
            </InteractiveCard>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.overview.meta.map((m, i) => (
            <InteractiveCard key={m.k} index={i} rgb="200,16,46" className="flex flex-col gap-1 rounded-[14px] border px-6 py-4" style={card}>
              <span className={label} style={{ color: C.mute }}>
                {m.k}
              </span>
              <span className="text-[15px] font-semibold leading-5">{m.v}</span>
            </InteractiveCard>
          ))}
        </div>
      </Section>

      {/* 02 */}
      <Section bg={C.cream} id="sec-02">
        <Head no="02" eyebrow={c.context.eyebrow} title={c.context.title} sub={c.context.sub} />
        <div className="grid overflow-hidden rounded-[20px] border bg-white md:grid-cols-3" style={{ borderColor: C.line }}>
          {c.context.stats.map((s, i) => (
            <div key={s.l} className={`flex flex-col gap-2 p-8 ${i ? "border-t md:border-l md:border-t-0" : ""}`} style={{ borderColor: C.line }}>
              <span className="text-[56px] font-bold leading-[60px] md:text-[64px] md:leading-[68px]" style={{ color: C.red }}>
                <CountUp value={s.n} />
              </span>
              <span className="text-[15px] leading-[22px]" style={{ color: C.mute }}>
                {s.l}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 rounded-3xl p-7 md:px-14 md:py-12" style={{ background: C.pink }}>
          <Eyebrow>DESIGN PRINCIPLE</Eyebrow>
          <p className="max-w-[960px] text-[24px] font-semibold leading-[1.3] md:text-[32px] md:leading-[42px]">{c.context.principle.text}</p>
          <p className="max-w-[760px] text-[15px] leading-[22px]" style={{ color: C.mute }}>
            {c.context.principle.note}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.context.roles.map((r, i) => {
            const Icon = roleIcons[i];
            return (
              <InteractiveCard key={r.t} index={i} rgb="200,16,46" className="flex flex-col gap-2 rounded-2xl border p-6" style={card}>
                <Tile size={40} radius={12}>
                  <Icon size={20} />
                </Tile>
                <h3 className="text-[18px] font-semibold leading-6">{r.t}</h3>
                <p className="text-[14px] leading-[21px]" style={{ color: C.mute }}>
                  {r.d}
                </p>
              </InteractiveCard>
            );
          })}
        </div>
      </Section>

      {/* 03 */}
      <Section bg="#fff" id="sec-03">
        <Head no="03" eyebrow={c.goals.eyebrow} title={c.goals.title} sub={c.goals.sub} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.goals.items.map((g, i) => {
            const Icon = goalIcons[i];
            return (
              <InteractiveCard key={g.t} index={i} rgb="200,16,46" className="flex flex-col gap-3 rounded-[20px] border px-6 py-7" style={card}>
                <Tile size={48} radius={14}>
                  <Icon size={24} />
                </Tile>
                <h3 className="text-[20px] font-semibold leading-[26px]">{g.t}</h3>
                <p className="text-[14px] leading-[21px]" style={{ color: C.mute }}>
                  {g.d}
                </p>
              </InteractiveCard>
            );
          })}
        </div>
      </Section>

      {/* 04 */}
      <Section bg={C.cream} id="sec-04">
        <Head no="04" eyebrow={c.approach.eyebrow} title={c.approach.title} sub={c.approach.intro} />
        <div className="relative">
          <div className="absolute left-0 right-0 top-[23px] hidden h-0.5 lg:block" style={{ background: C.line }} />
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {c.approach.steps.map((s, i) => {
              const Icon = stepIcons[i];
              const solid = i === 1 || i === 2;
              return (
                <div key={s.t} className="flex flex-col gap-2">
                  <div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-full"
                    style={solid ? { background: C.red, color: "#fff" } : { background: C.pink, color: C.red, border: `1px solid ${C.num}` }}
                  >
                    <Icon size={22} />
                  </div>
                  <span className={label} style={{ color: C.red }}>
                    {s.tag}
                  </span>
                  <h3 className="text-[20px] font-semibold leading-[26px]">{s.t}</h3>
                  <p className="pr-3 text-[15px] leading-[22px]" style={{ color: C.mute }}>
                    {s.d}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {c.approach.changes && (
          <div className="flex flex-col gap-3 rounded-[20px] border px-6 py-8 md:px-10" style={card}>
            <h3 className="text-[20px] font-semibold leading-7">{c.approach.changes.title}</h3>
            {c.approach.changes.rows.map(([a, b], i) => (
              <div
                key={a}
                className={`flex flex-col gap-1 pt-[14px] md:grid md:grid-cols-[440px_40px_1fr] md:gap-6 ${i ? "border-t" : "border-t"}`}
                style={{ borderColor: C.line }}
              >
                <span className="text-[16px] leading-6" style={{ color: C.mute }}>
                  {a}
                </span>
                <span className="text-[16px] font-semibold leading-6" style={{ color: C.red }}>
                  →
                </span>
                <span className="text-[16px] font-medium leading-6">{b}</span>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* 05 */}
      <Section bg="#fff" id="sec-05">
        <Head no="05" eyebrow={c.decisions.eyebrow} title={c.decisions.title} sub={c.decisions.intro} />
        <div className="grid gap-8 md:grid-cols-2">
          {c.decisions.items.map((d, i) => (
            <InteractiveCard key={d.t} index={i} rgb="200,16,46" as="article" className="row-span-5 grid grid-rows-subgrid gap-y-4 rounded-[20px] border p-6 md:p-8" style={card}>
              <div className="flex items-start gap-[14px]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] text-[16px] font-bold" style={{ background: C.pink, color: C.red }}>
                  {i + 1}
                </span>
                <h3 className="text-[22px] font-semibold leading-7">{d.t}</h3>
              </div>
              <div className="flex flex-col gap-1">
                <span className={label} style={{ color: C.mute }}>
                  WHAT THE SCREENS SHOW
                </span>
                <p className="text-[15px] leading-[23px]">{d.show}</p>
              </div>
              <div className="flex flex-col gap-1 border-b pb-5" style={{ borderColor: C.line }}>
                <span className={label} style={{ color: C.mute }}>
                  WHY · RETROSPECTIVE
                </span>
                <p className="text-[15px] leading-[23px]">{d.why}</p>
              </div>
              <div className="flex flex-col gap-1 rounded-xl px-4 py-[14px]" style={{ background: C.pink }}>
                <span className={label} style={{ color: C.red }}>
                  TRADE-OFF
                </span>
                <p className="text-[14px] leading-[21px]">{d.trade}</p>
              </div>
              <div className="flex flex-col gap-1 rounded-xl px-4 py-[14px]">
                <span className={label} style={{ color: C.mute }}>
                  TO VALIDATE
                </span>
                <p className="text-[14px] leading-[21px]" style={{ color: C.mute }}>
                  {d.validate}
                </p>
              </div>
            </InteractiveCard>
          ))}
        </div>
      </Section>

      {/* 06 */}
      <Section bg={C.cream} id="sec-06">
        <Head no="06" eyebrow={c.screens.eyebrow} title={c.screens.title} sub={c.screens.sub} />
        {c.screens.groups.map((g, i) => (
          <Screens key={i} g={g} />
        ))}
      </Section>

      {/* 07 */}
      <Section bg="#fff" id="sec-07">
        <Head no="07" eyebrow={c.outcome.eyebrow} title={c.outcome.title} sub={c.outcome.intro} />
        {c.outcome.badge && (
          <div className="flex flex-col gap-4 rounded-[28px] p-8 text-white md:flex-row md:items-center md:gap-12 md:px-14 md:py-12" style={{ background: grad(90) }}>
            <span className="text-[72px] font-bold leading-none md:text-[112px]">
              <CountUp value={c.outcome.badge.n} duration={2} />
            </span>
            <div className="flex max-w-[640px] flex-col gap-2">
              <span className="text-[12px] font-semibold leading-4 tracking-[0.12em] text-white/75">{c.outcome.badge.l}</span>
              <span className="text-[18px] font-medium leading-[1.4] md:text-[22px] md:leading-[30px]">{c.outcome.badge.d}</span>
            </div>
          </div>
        )}
        <div className="rounded-[20px] border bg-white px-6 py-2 md:px-10" style={{ borderColor: C.line }}>
          {c.outcome.blocks.map((b, i) => (
            <div
              key={b.h}
              className={`flex flex-col gap-2 py-6 md:flex-row md:gap-8 ${i ? "border-t" : ""}`}
              style={{ borderColor: C.line }}
            >
              <span className="text-[12px] font-semibold leading-5 tracking-[0.12em] md:w-[200px] md:shrink-0" style={{ color: i === 0 ? C.red : C.ink }}>
                {b.h}
              </span>
              <p className="text-[16px] leading-[25px]" style={{ color: C.mute }}>
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 08 */}
      <Section bg={C.cream} id="sec-08">
        <Head no="08" eyebrow={c.reflection.eyebrow} title={c.reflection.title} />
        <div className="grid gap-6 lg:grid-cols-3">
          {c.reflection.items.map((r, i) => (
            <InteractiveCard key={r.t} index={i} rgb="200,16,46" className="flex flex-col gap-[14px] rounded-[20px] border px-7 py-8" style={card}>
              <span className={label} style={{ color: C.red }}>
                {r.k}
              </span>
              <h3 className="text-[22px] font-semibold leading-[1.25] md:text-[24px] md:leading-[30px]">{r.t}</h3>
              <p className="text-[15px] leading-[23px]" style={{ color: C.mute }}>
                {r.d}
              </p>
            </InteractiveCard>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <section className="py-16 md:py-28" style={{ background: C.cream }}>
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-4 rounded-[32px] p-8 md:px-24 md:py-[72px]" style={{ background: C.pink }}>
            <h2 className="max-w-[880px] text-[32px] font-bold leading-[1.15] md:text-[44px] md:leading-[52px]">{c.closing.title}</h2>
            <p className="max-w-[640px] text-[16px] leading-[26px] md:text-[18px] md:leading-7" style={{ color: C.mute }}>
              {c.closing.body}
            </p>
          </div>
        </div>
      </section>
    </div>
    </LightboxProvider>
  );
}
