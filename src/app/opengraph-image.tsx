import { ImageResponse } from "next/og";

export const alt = "IMDEV — Web Development & AI Integration";
export const size = {
  width: 1200,
  height: 630,
};
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
          padding: "80px",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(0,245,196,0.12), transparent 45%), radial-gradient(circle at 85% 80%, rgba(167,139,250,0.10), transparent 45%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: "#00f5c4",
            }}
          />
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            IMDEV
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          <span>We build software&nbsp;</span>
          <span style={{ color: "#00f5c4" }}>that ships.</span>
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#a1a1aa",
            marginTop: 32,
            maxWidth: 820,
          }}
        >
          Web apps, SaaS products, and AI integrations — built with precision,
          delivered fast.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
