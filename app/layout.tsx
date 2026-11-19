import type { Metadata } from "next";
import { Source_Sans_3, Caveat } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import BackToTop from "@/components/BackToTop";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const SITE_URL = "https://billycheniago.com";
const SITE_TITLE = "Billy Cheniago | Product Designer & UI/UX Designer";
const SITE_DESCRIPTION =
  "Portfolio of Billy Cheniago, a UI/UX and Product Designer based in Jakarta. Four case studies: forest-fire control room, tourist ticketing, digital land deeds and a residential electricity app.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s | Billy Cheniago" },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Billy Cheniago",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Billy Cheniago",
  url: SITE_URL,
  jobTitle: "Product Designer & UI/UX Designer",
  address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
  sameAs: ["https://www.linkedin.com/in/billycheniago"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <head suppressHydrationWarning>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <BackToTop />
        <ThemeToggle />
      </body>
    </html>
  );
}
