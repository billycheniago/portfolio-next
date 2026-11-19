export type Asset = { src: string; w: number; h: number };

export type ScreenItem = { asset: Asset; alt: string; n?: string; title: string; caption: string };
export type ScreenGroup = { label?: string; layout: "full" | "half" | "web" | "phones"; items: ScreenItem[] };

export type CaseContent = {
  hero: { eyebrow: string; title: string; subtitle: string; lead: string; status: string };
  overview: {
    eyebrow: string;
    title: string;
    intro: string;
    challenge: { label: string; title: string; body: string };
    solution: { label: string; title: string; body: string };
    meta: { k: string; v: string }[];
  };
  evidence?: { title: string; rows: { h: string; body: string }[] };
  context: {
    eyebrow: string;
    title: string;
    sub?: string;
    stats: { n: string; l: string }[];
    principle: { text: string; note: string };
    roles: { t: string; d: string }[];
  };
  goals: {
    eyebrow: string;
    title: string;
    sub: string;
    items: { t: string; d?: string; before?: string; product?: string }[];
  };
  approach: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: { tag: string; t: string; d: string }[];
    changes?: { title: string; rows: [string, string][] };
  };
  decisions: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { t: string; evidence?: string; show: string; why: string; trade: string; validate: string }[];
  };
  screens: { eyebrow: string; title: string; sub: string; groups: ScreenGroup[] };
  outcome: {
    eyebrow: string;
    title: string;
    intro: string;
    milestone?: { date: string; t: string; note: string };
    badge?: { n: string; l: string; d: string };
    blocks: { h: string; body: string }[];
  };
  reflection: { eyebrow: string; title: string; sub?: string; items: { k: string; t: string; d: string }[] };
  closing: { title: string; body: string };
};
