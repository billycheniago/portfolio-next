export type CaseMeta = {
  title: string;
  description: string;
};

export const caseStudies: Record<string, CaseMeta> = {
  furtuna: {
    title: "Furtuna & Ayogo | Billy Cheniago",
    description:
      "Integrated ticketing for Indonesian tourist attractions: kiosk, POS, online booking and live dashboards.",
  },
  cikarang: {
    title: "Cikarang Listrindo | Billy Cheniago",
    description:
      "Designing an integrated electricity service app for token purchases, service requests, and customer complaints.",
  },
};
