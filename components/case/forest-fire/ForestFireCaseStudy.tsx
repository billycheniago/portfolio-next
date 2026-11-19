import ForestFireView from "./ForestFireView";
import type { CaseContent } from "../ams/types";
import { shots as s } from "./assets";

const content: CaseContent = {
  hero: {
    eyebrow: "PRODUCT CASE STUDY · 2026",
    title: "Forest Fire Command Center",
    subtitle: "A control-room web app for South Sumatra",
    lead: "One control-room screen for forest-fire watch, warning and forecast. I designed its interface and interactions as the UI/UX Designer within the contractor team.",
    status: "Complete · now in client training · not usability-tested · no outcome measured",
  },
  overview: {
    eyebrow: "Overview · The problem and the answer",
    title: "Turning scattered fire data into one screen for the control room",
    intro:
      "Fire data in South Sumatra sat in separate feeds: weather figures, map services, files, cameras and drones.",
    challenge: {
      label: "THE CHALLENGE",
      title: "Fire data in a dozen separate places",
      body: "Feeds, weather, maps, files, cameras and drones. The product exists to bring them together for duty officers, analysts and administrators.",
    },
    solution: {
      label: "THE SOLUTION",
      title: "One screen that says how fresh its data is",
      body: "Each source is registered once and the server collects on a schedule. A failed source keeps its last good reading with a “refresh failed” note. Six sections sit on top: monitoring, incident alerts, analytics, shared notes, fire spread simulation and a generated report.",
    },
    meta: [
      { k: "ROLE", v: "UI/UX Designer" },
      { k: "BUILD", v: "Weeks 1–10" },
      { k: "PLATFORM", v: "Web · desktop or video wall" },
      { k: "INTERFACE", v: "Indonesian · English" },
    ],
  },
  evidence: {
    title: "Evidence & limits",
    rows: [
      { h: "What the record holds", body: "What was built each week and how the screens changed." },
      { h: "What it does not hold", body: "Research notes, wireframes, usability sessions, or how officers worked before. I show scope and decisions, not findings, claim no baseline and left the research stage out rather than invent one." },
      { h: "How to read the rationale", body: "Rationale and trade-offs are my retrospective reading, not a record of options debated at the time. No usability testing was done." },
    ],
  },
  context: {
    eyebrow: "Context · What the record shows",
    title: "What the record contains, and what it doesn’t",
    stats: [
      { n: "6 + 1", l: "sections, plus Data Management" },
      { n: "4", l: "user roles, Viewer to Maintener" },
      { n: "5", l: "source types: 21 APIs, 16 OGC services, 10 spatial files, plus cameras and drones" },
    ],
    principle: {
      text: "Be honest about what the screen is showing: how fresh it is, what kind of figure it is and how far it can be trusted.",
      note: "Retrospective. I wrote this after the fact, from behavior repeated across the product. The team did not state it.",
    },
    roles: [
      { t: "Viewer", d: "Reads everything, creates no shared content. Can still arrange their own wall." },
      { t: "Operator", d: "Duty officers and analysts. Creates datasets, notes and threshold rules." },
      { t: "Superadmin", d: "Edits other people’s work and manages all data sources." },
      { t: "Maintener", d: "Technical owner and highest role. The app spells it “maintener”." },
    ],
  },
  goals: {
    eyebrow: "Goals · What it had to do",
    title: "Four jobs for one control-room screen",
    sub: "They describe what the product does, not how well it performed.",
    items: [
      { t: "Watch", d: "A monitoring wall of panels each person arranges. Every panel shows when it was last updated." },
      { t: "Get warned", d: "Pre-Crisis and Crisis thresholds open one incident per rule. A bell badge counts ongoing incidents on every page." },
      { t: "Analyze and simulate", d: "Trends, statistics and weighted scorings, plus a fire spread simulation labeled a model, not a forecast." },
      { t: "Report", d: "A report for a chosen period, built on the app’s own figures. Printable or a Word download." },
    ],
  },
  approach: {
    eyebrow: "Approach · How the work moved",
    title: "From contract scope to a documented build",
    intro:
      "What was built each week, and how the screens changed.",
    steps: [
      { tag: "SCOPE", t: "Start from the contract scope", d: "Dashboard, fire spread prediction, generative report, hardware and services." },
      { tag: "WEEKS 1–6", t: "One section a week, on sample data", d: "Sign-in and Monitoring, then Alert, Analytics, Notes, Fire Spread and Report." },
      { tag: "WEEKS 7–10", t: "Connect and extend", d: "Real-time database, Crisis & Pre-Crisis, datasets and scoring, AI report, Data Management." },
      { tag: "DOCS", t: "Document and report", d: "User guide, a progress report and an engine technical report." },
    ],
    changes: {
      title: "What changed between the prototype and the final build",
      rows: [
        ["Alert & Early Warning", "Crisis & Pre-Crisis"],
        ["Report picker: a list of map layers", "The app’s own objects, with scope tags"],
        ["Fire spread: layer list, 12-hour timeline", "Configurable simulation, one-week horizon"],
        ["Notes: placeholder images", "Real files and media"],
      ],
    },
  },
  decisions: {
    eyebrow: "The calls behind it · Four decisions",
    title: "Four decisions visible in the built product",
    intro:
      "What the screens show, why, the trade-off, and what is still to validate.",
    items: [
      {
        t: "A wall each person arranges, saved automatically",
        show: "Twenty preset layouts; switching pours existing panels into the new one. Layout, sizes, source and refresh interval save to the account with no Save button, except below about 760 px, so a phone can’t overwrite the desktop wall.",
        why: "A wall left on all day has to fit each person’s job and follow them to another computer.",
        trade: "Two officers may watch different things, and arranging panels is a desktop task.",
        validate: "Whether officers build their own walls or stay on presets, and what happens at shift change.",
      },
      {
        t: "Stale data stays on screen, and says so",
        show: "A failed source keeps its last good reading with a note that the latest refresh failed. Every panel footer shows when it was last updated and its refresh interval.",
        why: "In a control room, a blank panel is worse than an old number clearly labeled as old.",
        trade: "A note is easy to overlook; a long outage could leave a panel looking normal.",
        validate: "Whether users notice the note on a dense wall, or staleness needs a stronger signal.",
      },
      {
        t: "Two incident levels, one record per episode",
        show: "Each rule has Pre-Crisis and Crisis thresholds, with one open incident per rule that escalates but never steps down and closes only when the value returns to normal. A failed check never closes it, and a bell badge counts ongoing incidents on every page.",
        why: "Six hours above a threshold is one incident, not hundreds of notifications; keeping the worst level keeps the history honest.",
        trade: "Threshold rules aren’t role-gated: every signed-in user can edit or delete them.",
        validate: "Whether thresholds stay consistent across users, and whether Pre-Crisis alerts lead to action or become noise.",
      },
      {
        t: "Uncertainty is labeled, not hidden",
        show: "Fire spread is labeled “a model, not an official forecast”, uncalibrated for South Sumatra. Report objects are tagged period, current state, forecast or no time axis, and figures are finished before the AI narrative.",
        why: "A simulation or machine-written summary can look more authoritative than it is.",
        trade: "Caveats add reading and can be skimmed; they may lower trust in a tool the client paid for.",
        validate: "Whether officers understand the tags without a guide, and check reports against the figures.",
      },
    ],
  },
  screens: {
    eyebrow: "The screens · Final build",
    title: "Seven screens from the final build",
    sub: "The interface is in English; data object names keep the wording used in the app.",
    groups: [
      {
        layout: "full",
        items: [
          { asset: s.crisis, alt: "Crisis & Pre-Crisis: one gauge card per rule", title: "Crisis & Pre-Crisis", caption: "One gauge card per rule, with three zones." },
        ],
      },
      {
        layout: "half",
        items: [
          { asset: s.monitoring, alt: "Monitoring wall of panels", title: "Monitoring", caption: "A wall of panels each person arranges." },
          { asset: s.analytic, alt: "Analytic & Decision Support", title: "Analytic & Decision Support", caption: "Trends, statistics and weighted scorings." },
        ],
      },
      {
        layout: "full",
        items: [
          { asset: s.fireSpread, alt: "Fire Spread Prediction", title: "Fire Spread Prediction", caption: "Simulated perimeter with arrival time and burned area." },
        ],
      },
      {
        layout: "half",
        items: [
          { asset: s.notes, alt: "Important Notes", title: "Important Notes", caption: "The team’s shared notebook." },
          { asset: s.report, alt: "Generative Report", title: "Generative Report", caption: "Pick the data and time range, then generate." },
        ],
      },
      {
        layout: "full",
        items: [
          { asset: s.data, alt: "Data Management", title: "Data Management", caption: "Catalogs of APIs, OGC services, files, cameras and drones." },
        ],
      },
    ],
  },
  outcome: {
    eyebrow: "Where it landed · Outcome and status",
    title: "What I can and cannot claim",
    intro:
      "Delivered: the interface and interaction design — six sections plus Data Management, four roles, Indonesian and English. The team also delivered a fire-spread engine with a technical report, and a user guide.",
    badge: {
      n: "82",
      l: "SCOPE · FIRE-SPREAD ENGINE",
      d: "test cases in the engine’s suite, recorded as passing. This validates the engine’s code, not the interface.",
    },
    blocks: [
      { h: "VALIDATED", body: "A progress report with weekly build evidence went to the client’s director; I have no record of formal sign-off. Monitoring, Crisis & Pre-Crisis and Notes ran on a live backend by week 8." },
      { h: "NOT YET VALIDATED", body: "Usability with duty officers, analysts and administrators; stakeholder acceptance; calibration against real fires in South Sumatra; accuracy of AI report narratives; phone use beyond reading; live video and drones." },
      { h: "NOT MEASURED", body: "No completion rate, usage figure or response time was measured, so I quote none." },
      { h: "WHERE IT STANDS", body: "The app is complete and is now in the training stage with the client. I have no acceptance, rollout or usage data." },
    ],
  },
  reflection: {
    eyebrow: "Reflection · Three lessons",
    title: "Three lessons I carry forward",
    items: [
      { k: "THE CALL I’D DEFEND", t: "Say how fresh and how sure the screen is.", d: "A “refresh failed” note, an uncalibrated-model label and period / current / forecast tags all tell people what kind of number they are looking at. Where people decide under pressure, I’d rather have an honest label than a clean screen that hides its limits." },
      { k: "WHAT I’D DO DIFFERENTLY", t: "Keep a decision trail; test the alert flow early.", d: "I can show what was built week by week, but not why. Next time I’d keep a short decision log, and test the incident flow and wall setup with real duty officers before going live." },
      { k: "WHAT CHANGED IN MY PRACTICE", t: "Design the quiet states first.", d: "On this product, trust was decided in the states a mockup rarely shows: a source that fails, a small screen that must not overwrite a desktop wall, a threshold any signed-in user can edit, a model not yet calibrated for the region. Those cases shaped the interface more than the default view did. I now design them first and build the everyday screen around them." },
    ],
  },
  closing: {
    title: "A control-room screen that says how far to trust it",
    body: "Interface and interaction design for a forest-fire control room in South Sumatra. The app is complete and in client training; usability and outcomes are still to be validated.",
  },
};

export default function ForestFireCaseStudy() {
  return <ForestFireView c={content} />;
}
