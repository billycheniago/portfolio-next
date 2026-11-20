// Isi Quick guide Neko. Semua jawaban tertulis tetap (bukan AI).

export type GuideLink = { label: string; href: string; external?: boolean; meta?: string };
export type GuideReply = {
  text?: string;
  points?: { h: string; p: string }[];
  links?: GuideLink[];
  chips?: "interests";
};

export const guideGreeting =
  "Hi, I'm Neko, Billy's cat. Ask me anything about his work, experience or how to get in touch.";

export const guideInterests = [
  {
    label: "Complex systems and data",
    title: "Forest Fire Command Center",
    text: "Brings fire data from many sources onto one control-room screen.",
    href: "/case/forest-fire",
  },
  {
    label: "Multi-role products with hardware",
    title: "Furtuna & Ayogo",
    text: "Kiosk, POS, online booking and a role-based dashboard in one ticketing system.",
    href: "/case/furtuna",
  },
  {
    label: "Regulated, legal processes",
    title: "ADIPPATI",
    text: "A remote, recorded deed-signing flow with verified identities.",
    href: "/case/adippati",
  },
  {
    label: "Consumer mobile app",
    title: "Cikarang Listrindo",
    text: "A resident app for tokens, meters and complaints on mobile and web.",
    href: "/case/cikarang",
  },
];

export const guideQuestions: { id: string; q: string; reply: GuideReply }[] = [
  {
    id: "summary",
    q: "What does Billy do?",
    reply: {
      text: "UI/UX and Product Designer, 6+ years designing digital products. Four case studies, and each one says what was tested and what wasn't.",
      links: [
        { label: "Forest Fire Command Center", meta: "UI/UX Designer · In client training", href: "/case/forest-fire" },
        { label: "Furtuna & Ayogo", meta: "Product Designer & Product Manager · MVP demoed, June 2024", href: "/case/furtuna" },
        { label: "ADIPPATI", meta: "UI/UX Designer · Prototype, handed over", href: "/case/adippati" },
        { label: "Cikarang Listrindo", meta: "UI/UX Designer · MVP built", href: "/case/cikarang" },
      ],
    },
  },
  {
    id: "start",
    q: "Which project should I see first?",
    reply: { text: "Depends on what you're curious about. Pick one:", chips: "interests" },
  },
  {
    id: "works",
    q: "How does Billy work?",
    reply: {
      points: [
        { h: "Understand the system first", p: "Cikarang started from requirement documents and integration diagrams before any screen." },
        { h: "Design the quiet states", p: "Forest Fire plans for stale data and failed sources, not only the happy path." },
        { h: "Protect simplicity where people are rushed", p: "The Furtuna kiosk keeps the path to a printed ticket short, because public kiosks are noisy and rushed." },
        { h: "Show the evidence", p: "Each case says what was tested and what wasn't, and quotes no result that was never measured." },
      ],
    },
  },
  {
    id: "contact",
    q: "How do I get in touch?",
    reply: {
      text: "The contact section is the quickest way. The resume and LinkedIn are here too.",
      links: [
        { label: "Contact section", href: "/#contact" },
        { label: "Resume (PDF)", href: "/Billy_Cheniago_CV.pdf", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/billycheniago", external: true },
      ],
    },
  },
];
