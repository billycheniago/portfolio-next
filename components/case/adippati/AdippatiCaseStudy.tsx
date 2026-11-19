import AdippatiView from "./AdippatiView";
import type { CaseContent } from "../ams/types";
import { webShots as w, mobileShots as m } from "./assets";

const content: CaseContent = {
  hero: {
    eyebrow: "Product case study · 2022–2023",
    title: "Securing Land Transactions with Digital Deeds",
    subtitle: "A remote, recorded way for a land deed official and the parties to a sale to sign a deed.",
    lead: "I was the UI/UX Designer. I designed the web and mobile UI in Figma, working from the flow and use-case diagrams drawn by the product team.",
    status: "Prototype, handed over. Not usability-tested; no outcome measured.",
  },
  overview: {
    eyebrow: "Overview · The problem and the answer",
    title: "Turning a paper deed into a remote, recorded session",
    intro:
      "ADIPPATI lets a land deed official (PPAT), their staff and the parties to a sale sign a deed remotely, in a recorded video room, with verified identities.",
    challenge: {
      label: "The challenge",
      title: "A deed that depends on paper and presence",
      body: "In Indonesia, a land sale is formalized in a deed (AJB) made by a PPAT. The conventional process depends on paper and physical presence. The product's pitch deck lists the consequences: buyer and seller often arrive at different times, so the deed's \"today\" wording and signatures don't match what happened; files can be incomplete or lost after submission; copies often don't reach the parties; deeds are often not sent to the land office; and weak administration leaves room for land mafia.",
    },
    solution: {
      label: "The solution",
      title: "A recorded room with verified identities",
      body: "Everyone verifies their identity, joins a recorded video room where the PPAT reads the deed, and signs digitally. The electronic deed then goes to the land office, and copies go to the parties.",
    },
    meta: [
      { k: "ROLE", v: "UI/UX Designer" },
      { k: "PLATFORM", v: "Web; Android first for mobile" },
      { k: "USERS", v: "PPAT · PPAT staff · Buyers and sellers" },
      { k: "STATUS", v: "Prototype, handed over after the design work" },
    ],
  },
  evidence: {
    title: "Evidence & limits",
    rows: [
      { h: "What the record holds", body: "The product team's flows, a pitch deck, a company profile and functional test reports." },
      { h: "What it does not hold", body: "User research, wireframes or usability sessions. I claim none and describe the process as it happened." },
      { h: "How to read the rationale", body: "Rationale and trade-offs are my retrospective reading, not a record of options debated at the time. The flows were drawn by the product team." },
    ],
  },
  context: {
    eyebrow: "Context · Who takes part, and what the record contains",
    title: "Three roles, one deed",
    stats: [
      { n: "3", l: "main roles" },
      { n: "8", l: "flow areas" },
      { n: "6", l: "pain points" },
    ],
    principle: {
      text: "A legal process has to feel clear to a first-time user and strict enough to hold up legally. Every step that carries legal weight is visible and deliberate, not hidden to save a tap.",
      note: "Retrospective. I wrote this after the fact; the team did not state it.",
    },
    roles: [
      { t: "PPAT (land deed official)", d: "Creates the deed, hosts and records the session, reads the deed aloud, applies the e-meterai and signs." },
      { t: "PPAT staff", d: "Uploads and checks the parties' documents, guides the parties through registration, joins the session as a witness." },
      { t: "Buyers and sellers", d: "Register, verify their identity, join the room and sign." },
    ],
  },
  goals: {
    eyebrow: "Goals · What the remote deed has to do",
    title: "Four jobs the remote deed has to do",
    sub: "Each job replaces a step of the paper process.",
    items: [
      { t: "Verify identity", before: "Checked in person, on paper.", product: "e-KYC with ID number, ID card and tax ID photos, a selfie and a selfie video, then a certificate authority or a signature specimen." },
      { t: "Meet", before: "Parties come at different times; the deed says \"today\".", product: "One live video room with PPAT, staff, buyer and seller, recorded." },
      { t: "Sign", before: "Signatures on paper.", product: "Digital signature with OTP; the PPAT adds the e-meterai." },
      { t: "Deliver", before: "Copies often not delivered; deeds often not sent to the land office.", product: "Copies sent to the parties and the electronic deed to the land office, with storage and history in a PPAT e-office." },
    ],
  },
  approach: {
    eyebrow: "Approach · How the work moved",
    title: "From the product team's flows to a stakeholder review",
    intro:
      "From the flows I worked from to the screens I designed and presented.",
    steps: [
      { tag: "FLOWS · Dec 2022 – May 2023", t: "Study the flows", d: "The flow and use-case diagrams define eight areas: account registration, login, identity verification, quota top-up, deed document registration, deed transaction, deed delivery and a PPAT e-office. Registration and the deed transaction run across three lanes: PPAT, PPAT staff and the parties." },
      { tag: "SCREENS · Web and mobile", t: "Design the core screens", d: "Web: login, registration (not shown in the gallery), dashboard, deed type menu, top-up and payment. Mobile: home, legality form, the recorded virtual signing room and, in the company profile, verification and e-signature registration." },
      { tag: "PRESENTED · May 2023", t: "Support the presentations", d: "The product's project manager walked ATR/BPN stakeholders through the flow from start to finish at BPN headquarters and at a leadership meeting. My screens were the interface of that flow." },
      { tag: "ONE PROCESS · Aug 2023", t: "See it as one process", d: "The company profile lays the mobile screens out as one sequence: account registration, verification, deed registration, the recorded virtual signing room, then Pusdatin." },
    ],
  },
  decisions: {
    eyebrow: "The calls behind it · Four decisions",
    title: "Four decisions in the product",
    intro:
      "What the product does, why, the trade-off, and what is still to validate. Each card names its evidence.",
    items: [
      {
        t: "Registration paths matched to each role",
        evidence: "Evidence: flow diagram (no web screen)",
        show: "Registration has three lanes. The PPAT completes a profile in line with the official decree (SK); staff are approved by the PPAT and the decree; parties follow a personal, company or financial-service path. Everyone gives an ID number, ID card and tax ID photos, a selfie and a selfie video, then picks a certificate authority or fills a signature specimen and confirms by email.",
        why: "Each role needs different proof, so matching the path to the role avoids asking everyone for everything.",
        trade: "More paths to design and maintain, and a heavy document load for first-time users, so progress and retry states have to be clear.",
        validate: "Where first-time parties stall, especially at the photo and video capture steps.",
      },
      {
        t: "One room, delegated preparation, expiring invitations",
        evidence: "Evidence: flow diagram; mobile signing room screen",
        show: "Staff prepare and check the parties' documents and are notified when recording and signing are ready (the notification expires after one day). The PPAT invites the parties to the video room; the invitation expires after 30 minutes. In the room the PPAT reads the deed two-way, the parties sign, the PPAT adds the final signatures and stops the recording, and the deed goes to PPAT storage and to BPN.",
        why: "Preparation is separated from the legal session, so the PPAT's time in the room goes to reading and signing. Expiry keeps stale invitations from lingering.",
        trade: "A 30-minute window can lapse if a party is late, forcing a new invitation. The flow does not show what happens if power or the network fails mid-signing, so I treat that as an open design question.",
        validate: "Whether parties join within the window, how often sessions need a new invitation, and how a dropped connection is recovered.",
      },
      {
        t: "A dashboard that shows balances and work status together",
        evidence: "Evidence: dashboard screens, web and mobile",
        show: "Balance tiles for e-meterai, digital signatures and deed blanks with a Top Up button; counters for pending, draft and done documents; and an application history with status chips, search and a status filter. Row actions follow the status (Detail, or Lengkapi / Complete). The mobile home keeps the same logic: a quota strip with Top Up, search, four shortcuts and recent documents.",
        why: "A PPAT works with consumables and with deeds in progress, so both live on one screen: what can still be stamped and signed, and what needs attention.",
        trade: "Counters show volume, not urgency, so a PPAT with many pending deeds still has to open the list to find the oldest.",
        validate: "Whether PPATs and staff start from the counters or the list, and whether they notice a low balance in time.",
      },
      {
        t: "Top-up and payment that show the cost before paying",
        evidence: "Evidence: top-up, payment and QR screens",
        show: "Top-up lists single products (deed blank, signature, e-meterai) and bundles of 100, with an order summary and a Buy button that stays disabled until something is selected. Payment shows the fee per method, an itemised breakdown with tax and transaction fee, and a QR page with a 60-second countdown, steps and a warning not to close the page before payment is verified.",
        why: "Each deed uses a blank, signatures and an e-meterai, so PPATs buy these repeatedly. Unit prices, per-method fees and an itemised total remove surprises, and the countdown keeps users on the page while the payment is verified.",
        trade: "The total grows from Rp25.850 on the top-up screen to Rp28.952 at payment, because 10% tax and the transaction fee are added on the next screen. A 60-second QR window can also expire and force a retry.",
        validate: "Whether users pick a cheaper method once fees are visible, whether the changing total confuses them, and how often QR payments expire.",
      },
    ],
  },
  screens: {
    eyebrow: "The screens · Prototype",
    title: "Screens from the prototype",
    sub: "The interface is in Indonesian. Terms are glossed once in each caption.",
    groups: [
      {
        layout: "web",
        items: [
          { asset: w.signIn, alt: "ADIPPATI web: Sign in", n: "01", title: "Sign in", caption: "IPPAT identity on the left; phone or email and password on the right. \"Masuk\" means sign in." },
          { asset: w.dashboard, alt: "ADIPPATI web: Dashboard", n: "02", title: "Dashboard", caption: "Balances, document counters, application history, search and status filter." },
          { asset: w.topUp, alt: "ADIPPATI web: Top up", n: "03", title: "Top up", caption: "Single products and bundles of 100 with steppers, an order summary, consent text and top-up history." },
          { asset: w.topUpEmpty, alt: "ADIPPATI web: Top up, empty", n: "04", title: "Top up, empty", caption: "Buy stays disabled until something is selected." },
          { asset: w.payment, alt: "ADIPPATI web: Payment", n: "05", title: "Payment", caption: "Fee per method, itemised breakdown and total." },
          { asset: w.qrPayment, alt: "ADIPPATI web: QR payment", n: "06", title: "QR payment", caption: "QRIS code with a 60-second countdown, steps and a warning not to close the page." },
        ],
      },
      {
        label: "Mobile · Android first",
        layout: "phones",
        items: [
          { asset: m.dashboard, alt: "ADIPPATI mobile: Dashboard", n: "07", title: "Dashboard", caption: "Balances and document counters in one column, with a bottom navigation bar." },
          { asset: m.topUp, alt: "ADIPPATI mobile: Top up", n: "08", title: "Top up", caption: "Products, bundles and the order summary reflowed into a single column." },
          { asset: m.payment, alt: "ADIPPATI mobile: Payment", n: "09", title: "Payment", caption: "Payment sheet with method choice, itemised breakdown and total." },
          { asset: m.moreMethods, alt: "ADIPPATI mobile: More methods", n: "10", title: "More methods", caption: "Grouped as E-Wallet, QRIS and Virtual Account. The list scrolls under a pinned button." },
          { asset: m.qris, alt: "ADIPPATI mobile: QRIS", n: "11", title: "QRIS", caption: "A phone cannot scan its own screen, so the code can be saved to the gallery and uploaded in the e-wallet or m-banking app." },
          { asset: m.gopay, alt: "ADIPPATI mobile: GoPay redirect", n: "12", title: "GoPay redirect", caption: "A short wait while the app opens, with a manual link if it does not." },
          { asset: m.newRequest, alt: "ADIPPATI mobile: New request", n: "13", title: "New request", caption: "Choosing the deed type: Jual Beli (AJB), APHT, Tukar Menukar and more." },
          { asset: m.documents, alt: "ADIPPATI mobile: Documents", n: "14", title: "Documents", caption: "Step 1 of 2: pick the blank deed, then upload a PDF or take a photo." },
          { asset: m.virtualRoom, alt: "ADIPPATI mobile: Virtual room", n: "15", title: "Virtual room", caption: "Recorded room with every participant's video. Only the notary can start affixing or end the session." },
          { asset: m.endSession, alt: "ADIPPATI mobile: End session", n: "16", title: "End session", caption: "A confirmation before a recorded session ends and the deed returns to Draft. My proposal, not taken from the source flow." },
          { asset: m.affixing, alt: "ADIPPATI mobile: Affixing", n: "17", title: "Affixing", caption: "Deed preview, electronic stamp and signing order, with the notary's turn highlighted." },
          { asset: m.affixingDone, alt: "ADIPPATI mobile: Affixing done", n: "18", title: "Affixing done", caption: "Affixing finished, with one button back to the dashboard." },
        ],
      },
    ],
  },
  outcome: {
    eyebrow: "Where it landed · Outcome and status",
    title: "What I can and cannot claim",
    intro:
      "Delivered: the UI in Figma for the web app (login, registration, dashboard, deed types, top-up and payment) and the mobile app (home, legality form, verification, the recorded virtual signing room). The flows came from the product team. The mobile design files are no longer available, so the mobile screens in section 06 were redrawn for this case study.",
    milestone: { date: "May 2023", t: "Flow presented to ATR/BPN stakeholders", note: "A demo, not a validation." },
    blocks: [
      { h: "● What happened", body: "The product's project manager presented the end-to-end flow at BPN headquarters and at a leadership meeting in May 2023. The product team also ran functional QA on the web and Android builds: a test case sheet (v1.6, Apr 2023) with failure cases such as wrong ID numbers and oversized files, and written test reports. I have no record of formal approval." },
      { h: "○ Not yet validated", body: "Usability testing with PPAT staff and first-time citizens; results from limited pilots; the integration that would send deeds to the land office. The pitch deck plans limited pilots (Central Java, then Jakarta); I don't know whether they happened." },
      { h: "– Not measured", body: "No completion rate, signing time or usage figure was measured. The company profile estimates deed creation in under a day; those are the product team's estimates. The pitch deck projects deed work up to 50% faster than paper, which is a business expectation, not a result, so I quote no saving." },
      { h: "→ Where it stands", body: "Handed over after the design work. I don't know how the project continued, so I have no pilot, launch or usage results." },
    ],
  },
  reflection: {
    eyebrow: "Looking back · Reflection",
    title: "Three things I would carry forward",
    sub: "What this project taught me about designing for a regulated, remote process.",
    items: [
      { k: "THE CALL I'D DEFEND", t: "Keep the legal steps visible.", d: "Identity checks, reading the deed aloud, OTP confirmation and the e-meterai are the steps that make a deed valid. In a regulated process I would rather have a deliberate step than a fast one that weakens the result." },
      { k: "WHAT I'D DO DIFFERENTLY", t: "Test the hard steps early.", d: "The team tested whether the features worked, but no usability testing is documented. I would put the selfie-video check and the signing sequence in front of PPAT staff and first-time citizens before any pilot, because those are the steps where less technical users are most likely to stall." },
      { k: "WHAT CHANGED IN MY PRACTICE", t: "Design the failure paths, not only the happy one.", d: "The team's test cases spend as much effort on what should be refused or can expire (a wrong ID number, an oversized photo, an unpaid top-up, a lapsed QR code) as on what succeeds. In a regulated flow, every rejection and timeout needs a clear message and a way to continue. Next time I would design those screens alongside the main path, not after it." },
    ],
  },
  closing: {
    title: "A remote deed that keeps every legal step in view.",
    body: "UI for remote, recorded deed signing on web and mobile. Flow presented to ATR/BPN; usability and outcomes not yet measured.",
  },
};

export default function AdippatiCaseStudy() {
  return <AdippatiView c={content} />;
}
