import type { MetadataRoute } from "next";

const BASE = "https://billycheniago.com";
const slugs = ["forest-fire", "furtuna", "adippati", "cikarang"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, priority: 1 },
    ...slugs.map((slug) => ({ url: `${BASE}/case/${slug}`, priority: 0.8 })),
  ];
}
