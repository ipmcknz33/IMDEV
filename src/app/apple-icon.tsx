import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Background layer: rounded-rect + the two angle brackets, drawn as vector
// shapes so they render crisply without a font. The "IM" glyphs are rendered
// as live text below using the vendored Space Grotesk Bold.
const bgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="40" fill="#141817"/>
  <path d="M50 50 L25 90 L50 130" fill="none" stroke="#f2f4f3" stroke-width="12.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M130 50 L155 90 L130 130" fill="none" stroke="#f2f4f3" stroke-width="12.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default async function AppleIcon() {
  const spaceGrotesk = await readFile(
    join(process.cwd(), "assets/fonts/SpaceGrotesk-Bold.woff"),
  );

  const bgSrc = `data:image/svg+xml;base64,${Buffer.from(bgSvg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgSrc}
          width={180}
          height={180}
          style={{ position: "absolute", top: 0, left: 0 }}
          alt=""
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              fontSize: 48,
              color: "#f2f4f3",
              lineHeight: 1,
            }}
          >
            IM
          </span>
          {/* Dot lowered to tuck at the baseline (cy≈42 in the 72u mark),
              matching the approved logo instead of vertically centered. */}
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 999,
              background: "#17e6b3",
              transform: "translateY(11px)",
            }}
          />
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
