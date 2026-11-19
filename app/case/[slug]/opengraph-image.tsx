import { ImageResponse } from "next/og";
import { caseStudies } from "@/data/case-studies";
import { caseLook } from "@/components/case/caseLook";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = caseStudies[slug];
  const look = caseLook[slug];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: look?.gradient ?? "#171717",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 700, opacity: 0.9, display: "flex" }}>Case study</div>
        <div style={{ fontSize: 88, fontWeight: 800, marginTop: 14, lineHeight: 1.05, display: "flex" }}>
          {meta?.title ?? "Case study"}
        </div>
        <div style={{ fontSize: 34, marginTop: 28, opacity: 0.92, display: "flex" }}>
          {look?.kicker ?? ""}
        </div>
        <div style={{ fontSize: 28, marginTop: 48, opacity: 0.85, display: "flex" }}>
          Billy Cheniago · billycheniago.com
        </div>
      </div>
    ),
    { ...size },
  );
}
