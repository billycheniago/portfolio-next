// Dibuat otomatis dari gambar di public/case/cikarang/ (nama -> ukuran asli).
export const assets = {
  "office-photo": { src: "/case/cikarang/office-photo.webp", w: 1600, h: 1200 },
  "flow-buy-token": { src: "/case/cikarang/flow-buy-token.webp", w: 2000, h: 1189 },
  "ia-diagram": { src: "/case/cikarang/ia-diagram.webp", w: 2000, h: 1904 },
  "ui-splash": { src: "/case/cikarang/ui-splash.webp", w: 540, h: 1200 },
  "ui-onboarding": { src: "/case/cikarang/ui-onboarding.webp", w: 540, h: 1200 },
  "ui-home": { src: "/case/cikarang/ui-home.webp", w: 540, h: 1200 },
  "ui-tokens": { src: "/case/cikarang/ui-tokens.webp", w: 540, h: 1200 },
  "ui-buy": { src: "/case/cikarang/ui-buy.webp", w: 540, h: 1200 },
  "ui-pay": { src: "/case/cikarang/ui-pay.webp", w: 540, h: 1440 },
  "ui-detail": { src: "/case/cikarang/ui-detail.webp", w: 540, h: 1200 },
  "ui-history": { src: "/case/cikarang/ui-history.webp", w: 540, h: 1200 },
  "hero": { src: "/case/cikarang/hero.webp", w: 2000, h: 1166 },
  "sol-home": { src: "/case/cikarang/sol-home.webp", w: 1200, h: 1383 },
  "sol-tokens": { src: "/case/cikarang/sol-tokens.webp", w: 1200, h: 1383 },
  "sol-complaints": { src: "/case/cikarang/sol-complaints.webp", w: 1200, h: 1385 },
  "sol-newconn": { src: "/case/cikarang/sol-newconn.webp", w: 1200, h: 1385 },
  "type-specimen": { src: "/case/cikarang/type-specimen.webp", w: 1600, h: 713 },
} as const;

export type AssetName = keyof typeof assets;
