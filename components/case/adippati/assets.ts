import type { Asset } from "../ams/types";

const web = (n: string): Asset => ({ src: `/case/adippati/web-${n}.webp`, w: 1088, h: 718 });
const mob = (n: string): Asset => ({ src: `/case/adippati/mobile-${n}.webp`, w: 530, h: 1146 });

export const webShots = {
  signIn: web("01-sign-in"),
  dashboard: web("02-dashboard"),
  topUp: web("03-top-up"),
  topUpEmpty: web("04-top-up-empty"),
  payment: web("05-payment"),
  qrPayment: web("06-qr-payment"),
};

export const mobileShots = {
  dashboard: mob("09-dashboard"),
  topUp: mob("10-top-up"),
  payment: mob("11-payment"),
  moreMethods: mob("12-more-methods"),
  qris: mob("13-qris"),
  gopay: mob("14-gopay-redirect"),
  newRequest: mob("15-new-request"),
  documents: mob("16-documents"),
  virtualRoom: mob("17-virtual-room"),
  endSession: mob("18-end-session"),
  affixing: mob("19-affixing"),
  affixingDone: mob("20-affixing-done"),
};
