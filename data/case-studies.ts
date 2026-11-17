export type CaseMeta = {
  title: string;
  description: string;
};

export const caseStudies: Record<string, CaseMeta> = {
  furtuna: {
    title: "Furtuna & Ayogo",
    description:
      "Integrated ticketing for Indonesian tourist attractions: kiosk, POS, online booking and live dashboards.",
  },
  cikarang: {
    title: "Cikarang Listrindo",
    description:
      "Designing an integrated electricity service app for token purchases, service requests, and customer complaints.",
  },
  adippati: {
    title: "ADIPPATI",
    description:
      "UI for remote, recorded deed signing on web and mobile: a prototype handed over, not yet usability-tested.",
  },
  "forest-fire": {
    title: "Forest Fire Command Center",
    description:
      "Interface and interaction design for a forest-fire control room in South Sumatra: complete, in client training.",
  },
};
