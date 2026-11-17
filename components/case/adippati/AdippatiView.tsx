import type { ReactNode } from "react";
import { Contact, FileText, Monitor, PenLine, Presentation, Send, User, Users, Video, Workflow } from "lucide-react";
import Reveal from "../Reveal";
import HeroParallax from "../HeroParallax";
import CountUp from "../CountUp";
import InteractiveCard from "../InteractiveCard";
import { LightboxProvider, ZoomImage } from "../ams/Lightbox";
import type { CaseContent, ScreenGroup } from "../ams/types";

// Mengikuti frame Figma "ADIPPATI — Case study v1 (AMS structure)" (1440 px, konten 1120 px).
const C = {
  acc: "#04826f",
  dark: "#03594c",
  ink: "#16191d",
  mute: "#535b64",
  line: "#e1e5e0",
  num: "#bfe3db",
  mint: "#e4f3ef",
  cream: "#fafbf9",
};
const grad = (deg: number) => `linear-gradient(${deg}deg, #03594c, #04826f)`;
const label = "text-[12px] font-semibold leading-[18px] tracking-[0.04em]";

function Section({ bg, id, children }: { bg: string; id?: string; children: ReactNode }) {
  return (
    <section id={id} style={{ background: bg }} className="py-16 md:py-28">
      <Reveal>
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-10 px-5 sm:px-6 md:gap-14 lg:px-0">{children}</div>
      </Reveal>
    </section>
  );
}

function Head({ no, eyebrow, title, sub }: { no: string; eyebrow: string; title: string; sub?: string }) {
  return (
    <div>
      <div className="text-[60px] font-bold leading-[60px] tracking-[-0.02em] md:text-[84px] md:leading-[84px]" style={{ color: C.num }}>
        {no}
      </div>
      <div className="pb-3 pt-1 text-[16px] font-semibold italic leading-[27px] md:text-[18px]" style={{ color: C.acc }}>
        {eyebrow}
      </div>
      <h2 className="max-w-[860px] text-[32px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[42px] md:leading-[50px]" style={{ color: C.ink }}>
        {title}
      </h2>
      {sub && (
        <p className="max-w-[780px] pt-4 text-[16px] leading-[1.6] md:text-[18px] md:leading-[28px]" style={{ color: C.mute }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function Dot({ color, children, className = "" }: { color: string; children: ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-[13px] font-semibold leading-5 ${className}`} style={{ color }}>
      <span className="h-2 w-2 rounded-full" style={{ background: color }} />
      {children}
    </div>
  );
}

function Badge({ size, radius, children }: { size: number; radius: number; children: ReactNode }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center"
      style={{ width: size, height: size, borderRadius: radius, background: C.mint, color: C.dark }}
    >
      {children}
    </div>
  );
}

function Screens({ g }: { g: ScreenGroup }) {
  const web = g.layout === "web";
  return (
    <>
      {g.label && (
        <h3 className="text-[22px] font-semibold leading-7" style={{ color: C.ink }}>
          {g.label}
        </h3>
      )}
      <div className={web ? "grid gap-x-8 gap-y-8 md:grid-cols-2" : "grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4"}>
        {g.items.map((it) => (
          <figure key={it.asset.src} className="flex flex-col gap-3">
            <ZoomImage
              asset={it.asset}
              alt={it.alt}
              sizes={web ? "(min-width:1120px) 544px, (min-width:768px) 50vw, 100vw" : "(min-width:1120px) 265px, 50vw"}
              frameClassName={web ? "rounded-xl" : "rounded-lg"}
              className={`h-auto w-full border ${web ? "rounded-xl" : "rounded-lg"}`}
              style={{ borderColor: web ? C.line : "#e2e8f0" }}
            />
            <figcaption className="flex gap-[10px]">
              <span className="text-[14px] font-bold leading-[22px]" style={{ color: C.acc }}>
                {it.n}
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[16px] font-semibold leading-[22px]" style={{ color: C.ink }}>
                  {it.title}
                </span>
                <span className="text-[14px] leading-[21px]" style={{ color: C.mute }}>
                  {it.caption}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

const goalIcons = [Contact, Video, PenLine, Send];
const roleIcons = [Contact, Users, User];
const stepIcons = [FileText, Monitor, Presentation, Workflow];

export default function AdippatiView({ c }: { c: CaseContent }) {
  const card = { backgroundColor: "#fff", borderColor: C.line } as const;
  return (
    <LightboxProvider
      items={c.screens.groups.flatMap((g) =>
    g.items.map((it) => ({ src: it.asset.src, w: it.asset.w, h: it.asset.h, alt: it.alt, title: it.title, caption: it.caption })),
  )}
    >
    <div className="keep-light font-[family-name:var(--font-source-sans)] text-[#16191d]">
      {/* Hero */}
      <HeroParallax style={{ background: grad(180) }} className="px-5 pb-20 pt-28 text-white sm:px-6 md:pb-28 md:pt-24 lg:px-0">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-7 text-center">
          <div className="flex items-center gap-[10px] text-[13px] font-semibold leading-5 tracking-[0.04em] text-white/85">
            <span className="h-2 w-2 rounded-full" style={{ background: "#f2c811" }} />
            {c.hero.eyebrow}
          </div>
          <h1 className="max-w-[1040px] text-[44px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[60px] md:text-[76px] md:leading-[82px]">
            {c.hero.title}
          </h1>
          <p className="max-w-[940px] text-[20px] italic leading-[1.4] text-white/95 md:text-[26px] md:leading-9">{c.hero.subtitle}</p>
          <p className="max-w-[700px] text-[16px] leading-7 text-white/90 md:text-[18px]">{c.hero.lead}</p>
          <p className="rounded-full border border-white/40 bg-white/15 px-5 py-[9px] text-[14px] font-medium leading-[23px] md:text-[15px]">
            {c.hero.status}
          </p>
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
              rgb="4,130,111"
              className="flex flex-col gap-[14px] rounded-2xl p-6 md:p-8"
              style={i ? { backgroundColor: C.mint } : { ...card, borderWidth: 1 }}
            >
              <Dot color={i ? C.dark : C.acc}>{b.label}</Dot>
              <h3 className="text-[22px] font-semibold leading-[30px]">{b.title}</h3>
              <p className="text-[16px] leading-[25px]" style={{ color: C.mute }}>
                {b.body}
              </p>
            </InteractiveCard>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.overview.meta.map((m, i) => (
            <InteractiveCard key={m.k} index={i} rgb="4,130,111" className="flex flex-col gap-1.5 rounded-xl border p-[22px]" style={{ backgroundColor: C.cream, borderColor: C.line }}>
              <span className={label} style={{ color: C.acc }}>
                {m.k}
              </span>
              <span className="text-[16px] font-semibold leading-[22px]">{m.v}</span>
            </InteractiveCard>
          ))}
        </div>
      </Section>

      {/* 02 */}
      <Section bg={C.cream} id="sec-02">
        <Head no="02" eyebrow={c.context.eyebrow} title={c.context.title} sub={c.context.sub} />
        <div className="grid gap-6 md:grid-cols-3">
          {c.context.stats.map((s, i) => (
            <InteractiveCard key={s.l} index={i} rgb="4,130,111" className="flex flex-col gap-1.5 rounded-2xl border p-8" style={card}>
              <span className="text-[56px] font-bold leading-[60px] md:text-[64px] md:leading-[68px]" style={{ color: C.acc }}>
                <CountUp value={s.n} />
              </span>
              <span className="text-[16px] leading-6" style={{ color: C.mute }}>
                {s.l}
              </span>
            </InteractiveCard>
          ))}
        </div>
        <div className="flex flex-col gap-4 rounded-[20px] p-7 md:p-12" style={{ background: C.mint }}>
          <Dot color={C.dark}>Design principle</Dot>
          <p className="max-w-[960px] text-[22px] font-semibold leading-[1.35] md:text-[28px] md:leading-[38px]">{c.context.principle.text}</p>
          <p className="text-[15px] leading-[23px]" style={{ color: C.mute }}>
            {c.context.principle.note}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {c.context.roles.map((r, i) => {
            const Icon = roleIcons[i];
            return (
              <InteractiveCard key={r.t} index={i} rgb="4,130,111" className="flex flex-col gap-[14px] rounded-2xl border p-7" style={card}>
                <Badge size={44} radius={12}>
                  <Icon size={24} />
                </Badge>
                <h3 className="text-[20px] font-semibold leading-[26px]">{r.t}</h3>
                <p className="text-[16px] leading-[25px]" style={{ color: C.mute }}>
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.goals.items.map((g, i) => {
            const Icon = goalIcons[i];
            return (
              <InteractiveCard key={g.t} index={i} rgb="4,130,111" className="row-span-5 grid grid-rows-subgrid gap-y-[14px] rounded-2xl border p-[26px]" style={card}>
                <Badge size={48} radius={12}>
                  <Icon size={24} />
                </Badge>
                <h3 className="text-[22px] font-semibold leading-7">{g.t}</h3>
                <div className="flex flex-col gap-1">
                  <span className={label} style={{ color: C.mute }}>
                    Before
                  </span>
                  <span className="text-[15px] leading-[22px]" style={{ color: C.mute }}>
                    {g.before}
                  </span>
                </div>
                <div className="h-px self-center" style={{ background: C.num }} />
                <div className="flex flex-col gap-1">
                  <span className={label} style={{ color: C.dark }}>
                    In the product
                  </span>
                  <span className="text-[15px] leading-[22px]">{g.product}</span>
                </div>
              </InteractiveCard>
            );
          })}
        </div>
      </Section>

      {/* 04 */}
      <Section bg={C.cream} id="sec-04">
        <Head no="04" eyebrow={c.approach.eyebrow} title={c.approach.title} sub={c.approach.intro} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {c.approach.steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={s.t} className="flex flex-col gap-3">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: C.acc }}>
                    <Icon size={24} />
                  </div>
                  <div className="h-0.5 flex-1" style={{ background: C.num }} />
                </div>
                <span className={label} style={{ color: C.acc }}>
                  {s.tag}
                </span>
                <h3 className="text-[20px] font-semibold leading-[26px]">{s.t}</h3>
                <p className="text-[15px] leading-[23px]" style={{ color: C.mute }}>
                  {s.d}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 05 */}
      <Section bg="#fff" id="sec-05">
        <Head no="05" eyebrow={c.decisions.eyebrow} title={c.decisions.title} sub={c.decisions.intro} />
        <div className="grid gap-6 md:grid-cols-2">
          {c.decisions.items.map((d, i) => (
            <InteractiveCard key={d.t} index={i} rgb="4,130,111" as="article" className="row-span-6 grid grid-rows-subgrid gap-y-[18px] rounded-[20px] border p-6 md:p-8" style={card}>
              <div className="flex items-start gap-[14px]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[16px] font-bold text-white" style={{ background: C.acc }}>
                  {i + 1}
                </span>
                <h3 className="text-[22px] font-semibold leading-7">{d.t}</h3>
              </div>
              <span className={`${label} self-center`} style={{ color: C.acc }}>
                {d.evidence}
              </span>
              <div className="flex flex-col gap-1.5">
                <span className={label} style={{ color: C.mute }}>
                  What it shows
                </span>
                <p className="text-[15px] leading-[23px]">{d.show}</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className={label} style={{ color: C.mute }}>
                  Why · retrospective
                </span>
                <p className="text-[15px] leading-[23px]" style={{ color: C.mute }}>
                  {d.why}
                </p>
              </div>
              <div className="flex flex-col gap-1.5 rounded-xl p-4" style={{ background: "#fff6cc" }}>
                <span className={label} style={{ color: "#7a5b00" }}>
                  Trade-off
                </span>
                <p className="text-[15px] leading-[22px]">{d.trade}</p>
              </div>
              <div className="flex flex-col gap-1.5 rounded-xl p-4" style={{ background: "#e8eef9" }}>
                <span className={label} style={{ color: "#2f4c94" }}>
                  To validate
                </span>
                <p className="text-[15px] leading-[22px]">{d.validate}</p>
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
        {c.outcome.milestone && (
          <div
            className="flex flex-col gap-3 rounded-3xl p-8 text-white md:flex-row md:items-center md:gap-8 md:p-10"
            style={{ background: grad(90) }}
          >
            <span className="text-[44px] font-bold leading-[1.1] md:w-[260px] md:shrink-0 md:text-[64px] md:leading-[68px]">
              {c.outcome.milestone.date}
            </span>
            <div className="flex flex-col gap-1.5">
              <span className="text-[20px] font-semibold leading-[26px]">{c.outcome.milestone.t}</span>
              <span className="text-[16px] leading-6 text-white/85">{c.outcome.milestone.note}</span>
            </div>
          </div>
        )}
        <div className="border-t" style={{ borderColor: C.line }}>
          {c.outcome.blocks.map((b, i) => (
            <div
              key={b.h}
              className="flex flex-col gap-2 border-b py-6 md:flex-row md:gap-8"
              style={{ borderColor: C.line }}
            >
              <span className="text-[13px] font-semibold leading-5 md:w-[240px] md:shrink-0" style={{ color: i === 0 ? C.acc : C.mute }}>
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
        <Head no="08" eyebrow={c.reflection.eyebrow} title={c.reflection.title} sub={c.reflection.sub} />
        <div className="grid gap-6 lg:grid-cols-3">
          {c.reflection.items.map((r, i) => (
            <InteractiveCard key={r.t} index={i} rgb="4,130,111" className="flex flex-col gap-3 rounded-[20px] border p-7" style={card}>
              <span className={label} style={{ color: C.acc }}>
                {r.k}
              </span>
              <h3 className="text-[22px] font-bold leading-7">{r.t}</h3>
              <p className="text-[15px] leading-6" style={{ color: C.mute }}>
                {r.d}
              </p>
            </InteractiveCard>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <section className="bg-white py-16 md:py-28">
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-4 rounded-[32px] p-8 text-white md:p-16" style={{ background: grad(180) }}>
            <h2 className="max-w-[900px] text-[32px] font-bold leading-[1.15] md:text-[44px] md:leading-[52px]">{c.closing.title}</h2>
            <p className="max-w-[800px] text-[16px] leading-[26px] text-white/85 md:text-[17px]">{c.closing.body}</p>
          </div>
        </div>
      </section>
    </div>
    </LightboxProvider>
  );
}
