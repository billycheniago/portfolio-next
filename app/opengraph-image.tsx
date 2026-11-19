import { ImageResponse } from "next/og";

export const alt = "Billy Cheniago, Product Designer & UI/UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg,#ffffff 0%,#fff1e6 100%)",
          color: "#171717",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, color: "#e64406", display: "flex" }}>Portfolio</div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 12, display: "flex" }}>Billy Cheniago</div>
        <div style={{ fontSize: 44, marginTop: 20, color: "#404040", display: "flex" }}>
          Product Designer &amp; UI/UX Designer
        </div>
        <div style={{ fontSize: 30, marginTop: 36, color: "#737373", display: "flex" }}>
          billycheniago.com · Jakarta, Indonesia
        </div>
      </div>
    ),
    { ...size },
  );
}
