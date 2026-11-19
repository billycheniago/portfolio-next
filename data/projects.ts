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
  role?: string; // chip peran di atas judul
  status?: { label: string; dot: string; pulse?: boolean }; // chip status di atas judul (dot = kelas warna Tailwind)
};

// Urutan kartu di halaman depan = urutan di array ini.
export const projects: Project[] = [
  // ===== CARD 1: FOREST FIRE COMMAND CENTER =====
  // Thumbnail belum ada: upload mockup ke public/projects/forest-fire.png lalu hapus komentar image.
  {
    slug: "forest-fire",
    title: "Turning Scattered Fire Data into One Control-Room Screen",
    stats: [
      { label: "Platform", value: "Web" },
      { label: "Sections", value: "6 + 1" },
      { label: "Users", value: "4 roles" },
    ],
    role: "UI/UX Designer",
    status: { label: "In client training", dot: "bg-emerald-300", pulse: true },
    image: "/projects/forest-fire.png",
    href: "/case/forest-fire",
    gradient: "bg-linear-to-b from-[#C30F2C] to-[#9A0C24]",
    valueColor: "text-amber-100",
  },

  // ===== CARD 2: FURTUNA =====
  {
    slug: "furtuna",
    title: "Under 2-Minute Ticketing for Tourist Attractions",
    stats: [
      { label: "Checkout Time", value: "< 2 min" },
      { label: "System", value: "4-in-1" },
      { label: "Demoed", value: "SMESCO" },
    ],
    role: "Product Designer & PM",
    status: { label: "MVP demoed · Jun 2024", dot: "bg-emerald-300" },
    image: "/projects/furtuna.png",
    href: "/case/furtuna",
    gradient: "bg-linear-to-b from-[#E8944A] to-[#C25A0A]",
    valueColor: "text-amber-100",
  },

  // ===== CARD 3: ADIPPATI =====
  // Thumbnail belum ada: upload mockup (PNG transparan ~545x443) ke public/projects/adippati.png
  // lalu hapus tanda komentar pada baris image di bawah.
  {
    slug: "adippati",
    title: "Securing Land Transactions with Digital Deeds",
    stats: [
      { label: "Platform", value: "Web + Mobile" },
      { label: "Users", value: "3 roles" },
    ],
    role: "UI/UX Designer",
    status: { label: "Prototype", dot: "bg-amber-300" },
    image: "/projects/adippati-v2.png",
    href: "/case/adippati",
    gradient: "bg-linear-to-b from-[#027F6D] to-[#025C50]",
    valueColor: "text-yellow-200",
  },

  // ===== CARD 4: CIKARANG LISTRINDO =====
  {
    slug: "cikarang-listrindo",
    title: "One App for Electricity Tokens, Services & Complaints",
    stats: [
      { label: "Platform", value: "iOS, Android, Web" },
      { label: "Core Tasks", value: "≤ 2 Taps" },
    ],
    role: "UI/UX Designer",
    status: { label: "MVP built", dot: "bg-emerald-300" },
    image: "/projects/cikarang.png",
    href: "/case/cikarang",
    gradient: "bg-linear-to-b from-[#E8606A] to-[#A81010]",
    valueColor: "text-yellow-200",
  },
];
