import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(0,245,196,0.16), transparent 55%), radial-gradient(circle at 80% 85%, rgba(167,139,250,0.12), transparent 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: 999,
            background: "#00f5c4",
          }}
        />
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          IMDEV
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
