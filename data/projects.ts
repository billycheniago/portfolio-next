export type Project = {
  slug: string; // nama unik, tidak boleh sama antar project
  title: string;
  brand?: string; // teks logo sementara (hapus jika tidak perlu)
  logo?: string; // path gambar logo, mis. "/projects/furtuna-logo.svg"
  image?: string; // mockup di sisi kanan
  stats: { label: string; value: string }[];
  href: string; // tujuan tombol View Case Study
  gradient: string; // kelas Tailwind untuk latar kartu
  valueColor: string; // warna angka statistik
};

export const projects: Project[] = [
  // ===== CARD 1: ASLI =====
  {
    slug: "furtuna",
    title: "Under 2-Minute Ticketing for Tourist Attractions",
    stats: [
      { label: "Checkout Time", value: "< 2 min" },
      { label: "System", value: "4-in-1" },
      { label: "Validated", value: "SMESCO" },
    ],
    image: "/projects/furtuna.png",
    href: "/case/furtuna",
    gradient: "bg-linear-to-b from-[#E8944A] to-[#C25A0A]",
    valueColor: "text-amber-100",
  },

  // ===== CARD 2: ASLI =====
  {
    slug: "cikarang-listrindo",
    title: "One App for Electricity Tokens, Services & Complaints",
    stats: [
      { label: "Platform", value: "3" },
      { label: "Services", value: "4 Modules" },
      { label: "Core Tasks", value: "≤ 2 Taps" },
    ],
    image: "/projects/cikarang.png",
    href: "/case/cikarang",
    gradient: "bg-linear-to-b from-[#E8606A] to-[#A81010]",
    valueColor: "text-yellow-200",
  },

  // ===== CARD 3: PLACEHOLDER =====
  // {
  //   slug: "tuntun-watchlist",
  //   title: "Design Watchlist with a Unique First Time UX",
  //   stats: [
  //     { label: "Engagement", value: "60%" },
  //     { label: "Influence Trx", value: "20%" },
  //     { label: "Strong", value: "Retention" },
  //   ],
  //   image: "/projects/tuntun.png",
  //   href: "#",
  //   gradient: "bg-linear-to-br from-[#6D4BE8] via-[#4A2BB0] to-[#1B0F45]",
  //   valueColor: "text-lime-300",
  // },

  // // ===== CARD 4: PLACEHOLDER =====
  // {
  //   slug: "placeholder-4",
  //   title: "Design Watchlist with a Unique First Time UX",
  //   stats: [
  //     { label: "Engagement", value: "60%" },
  //     { label: "Influence Trx", value: "20%" },
  //     { label: "Strong", value: "Retention" },
  //   ],
  //   image: "/projects/tuntun.png",
  //   href: "#",
  //   gradient: "bg-linear-to-br from-[#6D4BE8] via-[#4A2BB0] to-[#1B0F45]",
  //   valueColor: "text-lime-300",
  // },
];
