import type { LightboxItem } from "./ams/Lightbox";

type Asset = { src: string; w: number; h: number };

function humanize(name: string) {
  const s = name.replace(/-/g, " ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Daftar gambar untuk lightbox (urutan = urutan di file assets). Ikon kecil dan gambar yang ditandai di-exclude tidak ikut.
export function zoomItems(
  assets: Record<string, Asset>,
  options: { minWidth?: number; exclude?: (name: string) => boolean } = {},
): LightboxItem[] {
  const { minWidth = 400, exclude } = options;
  return Object.entries(assets)
    .filter(([name, a]) => a.w >= minWidth && !(exclude && exclude(name)))
    .map(([name, a]) => ({ src: a.src, w: a.w, h: a.h, alt: humanize(name) }));
}
