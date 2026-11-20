"use client";

import { useState } from "react";
import BackToTop from "./BackToTop";
import NekoLauncher from "./neko/NekoLauncher";

// Satu tumpukan di pojok kanan bawah: back-to-top di atas, Neko di bawah.
// Kedua tombol rata kanan (items-end), sejajar dengan margin kanan layar.
export default function FloatingDock() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <BackToTop hidden={open} />
      <NekoLauncher open={open} onOpenChange={setOpen} />
    </div>
  );
}
