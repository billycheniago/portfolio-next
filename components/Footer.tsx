import Link from "next/link";

const LINKEDIN_URL = "https://www.linkedin.com/in/billycheniago";

const links = [
  { label: "Work", href: "/#work", external: false },
  { label: "Contact", href: "/#contact", external: false },
  { label: "Resume", href: "/Billy_Cheniago_CV.pdf", external: true },
  { label: "LinkedIn", href: LINKEDIN_URL, external: true },
];

const linkClass =
  "rounded-sm underline-offset-4 transition hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-5 pb-40 pt-10 sm:px-8 md:pb-40">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-base font-bold text-neutral-900">Billy Cheniago</p>
          <p className="mt-1 text-sm text-neutral-700">Product Designer &amp; UI/UX Designer · Jakarta, Indonesia</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-neutral-800">
            {links.map((l) => (
              <li key={l.label}>
                {l.external ? (
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-5xl text-center text-xs text-neutral-700 md:text-left">
        © Billy Cheniago. All rights reserved.
      </p>
    </footer>
  );
}
