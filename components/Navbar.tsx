"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ArrowUpRight, Briefcase, Mail, Menu, User, X } from "lucide-react";

const links = [
  { label: "About", href: "#home", icon: User },
  { label: "Work", href: "#work", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("About");
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const shouldHide = latest > previous && latest > 20;
    setHidden(shouldHide);
    if (shouldHide) setMenuOpen(false); // menu ikut tertutup saat navbar sembunyi
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      animate={hidden ? "hidden" : "visible"}
      variants={{ visible: { y: 0 }, hidden: { y: "-130%" } }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 md:px-8"
    >
      <nav
        className={`mx-auto flex w-full items-center justify-between rounded-full border transition-all duration-300 md:grid md:grid-cols-[1fr_auto_1fr] ${
          scrolled
            ? "mt-3 max-w-4xl border-neutral-200 bg-white/70 px-3 py-2 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "mt-0 max-w-[68rem] border-transparent px-0 py-6"
        }`}
      >
        {/* Kiri */}
        <a
          href="#home"
          className="flex items-center font-medium text-neutral-900"
        >
          {/* Mobile: foto saja */}
          <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full md:hidden">
            <Image
              src="/profile.jpg"
              alt="Billy Cheniago"
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>

          {/* Desktop: foto (saat scrolled) + nama */}
          <span className="hidden items-center md:flex">
            <AnimatePresence initial={false}>
              {scrolled && (
                <motion.span
                  key="avatar"
                  initial={{ opacity: 0, width: 0, marginRight: 0 }}
                  animate={{ opacity: 1, width: 40, marginRight: 12 }}
                  exit={{ opacity: 0, width: 0, marginRight: 0 }}
                  className="relative block h-10 shrink-0 overflow-hidden rounded-full"
                >
                  <Image
                    src="/profile.jpg"
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </motion.span>
              )}
            </AnimatePresence>
            <span
              className={`transition-all duration-300 ${scrolled ? "text-lg" : "text-xl"}`}
            >
              Billy Cheniago
            </span>
          </span>
        </a>

        {/* Tengah: menu pil (desktop saja) */}
        <ul className="hidden items-center gap-1 rounded-full bg-[#F1F0ED] p-1.5 md:flex">
          {links.map(({ label, href, icon: Icon }) => {
            const isActive = active === label;
            return (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setActive(label)}
                  className={`relative flex items-center gap-2 rounded-full px-6 text-base font-medium transition-all duration-300 ${
                    scrolled ? "py-2" : "py-3"
                  } ${
                    isActive
                      ? "text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                  {isActive && <Icon size={16} className="relative" />}
                  <span className="relative">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Kanan: Resume + hamburger (hamburger hanya mobile) */}
        <div className="flex items-center gap-2 md:justify-self-end">
          <a
            href="/Billy_Cheniago_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent-from to-accent-to px-5 text-sm font-semibold text-white shadow-md shadow-accent/30 transition-all duration-300 hover:brightness-110 md:px-6 md:text-base ${
              scrolled ? "py-2.5" : "py-3"
            }`}
          >
            Resume <ArrowUpRight size={18} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F1F0ED] text-neutral-900 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 flex w-full max-w-3xl flex-col gap-1 rounded-3xl border border-neutral-200 bg-white/90 p-2 shadow-lg shadow-black/5 backdrop-blur-xl md:hidden"
          >
            {links.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => {
                    setActive(label);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-lg font-medium ${
                    active === label
                      ? "bg-[#F1F0ED] text-neutral-900"
                      : "text-neutral-600"
                  }`}
                >
                  <Icon size={20} />
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
