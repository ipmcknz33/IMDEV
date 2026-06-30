import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "./ClientShell";
import JsonLd from "./JsonLd";

const title = "IMDEV | Web Development & AI Integration";
const description =
  "IMDEV builds polished web products, modern front-end systems, app builds, and AI-enhanced digital experiences with real product thinking.";

export const metadata: Metadata = {
  metadataBase: new URL("https://imdev.studio"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://imdev.studio",
    siteName: "IMDEV",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
