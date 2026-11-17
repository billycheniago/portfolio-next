import type { Asset } from "../ams/types";

const a = (n: string, w: number, h: number): Asset => ({ src: `/case/forest-fire/${n}.webp`, w, h });

export const shots = {
  monitoring: a("02-monitoring", 1088, 650),
  crisis: a("03-crisis", 2240, 1122),
  analytic: a("04-analytic", 1088, 650),
  fireSpread: a("05-fire-spread", 2240, 1338),
  report: a("06-report", 1088, 650),
  notes: a("07-notes", 1088, 650),
  data: a("08-data-management", 2240, 1338),
};
