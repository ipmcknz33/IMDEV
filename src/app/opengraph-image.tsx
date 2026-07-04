import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "IMDEV — Websites that win you customers.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// The complete bracket-monogram mark with the "IM" letterforms pre-outlined,
// so it renders identically to app/icon.svg regardless of font handling.
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="120" height="120">
  <rect width="72" height="72" rx="16" fill="#141817"/>
  <path d="M20 20 L10 36 L20 52" fill="none" stroke="#f2f4f3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M52 20 L62 36 L52 52" fill="none" stroke="#f2f4f3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.80 44L20.16 44L20.16 30L22.80 30L22.80 44M28 44L25.44 44L25.44 30L30.34 30L32.76 42.20L33.12 42.20L35.54 30L40.44 30L40.44 44L37.88 44L37.88 31.94L37.52 31.94L35.12 44L30.76 44L28.36 31.94L28 31.94Z" fill="#f2f4f3"/>
  <circle cx="47.64" cy="42" r="4.2" fill="#17e6b3"/>
</svg>`;

export default async function Image() {
  const spaceGrotesk = await readFile(
    join(process.cwd(), "assets/fonts/SpaceGrotesk-Bold.woff"),
  );

  const markSrc = `data:image/svg+xml;base64,${Buffer.from(markSvg).toString("base64")}`;

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
          background: "#141817",
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(23,230,179,0.16), transparent 45%), radial-gradient(circle at 88% 82%, rgba(23,230,179,0.08), transparent 45%)",
          color: "#f2f4f3",
          fontFamily: "Space Grotesk",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 44,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={120} height={120} alt="" />
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <span
              style={{
                fontSize: 52,
                fontWeight: 700,
                letterSpacing: "0.02em",
                color: "#f2f4f3",
              }}
            >
              IMDEV
            </span>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#17e6b3",
                marginLeft: 8,
                marginBottom: 8,
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 960,
          }}
        >
          <span style={{ color: "#f2f4f3" }}>Websites that&nbsp;</span>
          <span style={{ color: "#17e6b3" }}>win you customers.</span>
        </div>

        <div
          style={{
            fontSize: 30,
            color: "rgba(242,244,243,0.66)",
            marginTop: 30,
            maxWidth: 860,
          }}
        >
          Fast, mobile-first sites for Hawaii&apos;s local businesses.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: spaceGrotesk,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
