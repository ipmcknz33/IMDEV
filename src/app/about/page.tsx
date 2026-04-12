"use client";

import Link from "next/link";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "OpenAI API",
  "Anthropic API",
  "Vercel",
  "Git",
];

const values = [
  {
    icon: "◈",
    title: "Product first.",
    desc: "We think about who uses the thing, not just how it's built. Every decision traces back to real user value.",
  },
  {
    icon: "⬡",
    title: "Clean execution.",
    desc: "Readable code, maintainable architecture, and interfaces that don't need a manual. Quality is non-negotiable.",
  },
  {
    icon: "⟁",
    title: "Built to scale.",
    desc: "We don't build for demos. Every project is structured to grow, add features, and handle real-world usage.",
  },
  {
    icon: "◎",
    title: "Honest communication.",
    desc: "Clear scopes, realistic timelines, and no surprises. We say what we'll do and do what we say.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <div
        className="orb"
        style={{
          width: 180,
          height: 180,
          left: "5%",
          top: 100,
          background: "rgba(0,245,196,0.07)",
        }}
      />
      <div
        className="orb"
        style={{
          width: 150,
          height: 150,
          right: "8%",
          top: 280,
          background: "rgba(167,139,250,0.06)",
          animationDelay: "2s",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Header ───────────────────────────────────── */}
        <section style={{ maxWidth: 720, marginBottom: 72 }}>
          <span className="eyebrow fade-up" style={{ marginBottom: 16 }}>
            About IMDEV
          </span>
          <h1
            className="fade-up-1"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", marginBottom: 24 }}
          >
            A studio built around making things that{" "}
            <span style={{ color: "var(--accent)" }}>actually matter.</span>
          </h1>
          <p
            className="fade-up-2"
            style={{ fontSize: "1.05rem", maxWidth: 620 }}
          >
            IMDEV is a focused product development studio. We take on web
            development, app builds, AI integrations, consulting work, and
            strategic collaborations — and we bring the same standard of craft
            to all of it.
          </p>
        </section>

        {/* ── Story ────────────────────────────────────── */}
        <section
          className="panel"
          style={{ padding: "48px 44px", marginBottom: 72 }}
        >
          <div className="panel-glow" />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
            }}
          >
            <div>
              <span className="eyebrow" style={{ marginBottom: 14 }}>
                Who We Are
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
                  marginBottom: 18,
                }}
              >
                Founded to build products worth building.
              </h2>
              <p style={{ marginBottom: 16 }}>
                IMDEV started with a simple premise: most software is built too
                fast, with too little care, and too little understanding of the
                people using it. We set out to do it differently.
              </p>
              <p>
                We work with founders, businesses, and teams who want products
                that are clean, scalable, and genuinely useful — not just
                shippable.
              </p>
            </div>
            <div>
              <span className="eyebrow" style={{ marginBottom: 14 }}>
                What Sets Us Apart
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  marginTop: 4,
                }}
              >
                {[
                  "Product thinking baked into every build",
                  "Modern stack — Next.js, React, Tailwind, AI",
                  "Clean, maintainable code you can hand to any dev",
                  "Recruiter-ready portfolio and case studies",
                  "AI integration as a first-class skill, not an afterthought",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.8rem",
                        marginTop: 2,
                      }}
                    >
                      →
                    </span>
                    <span
                      style={{ fontSize: "0.9rem", color: "var(--text-soft)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ───────────────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>
              How We Work
            </span>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
              Principles we don&apos;t compromise on.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {values.map((v) => (
              <div key={v.title} className="card-flat">
                <div className="icon-box" style={{ marginBottom: 16 }}>
                  {v.icon}
                </div>
                <h3 style={{ marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: "0.9rem" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tech stack ───────────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 36,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <span className="eyebrow" style={{ marginBottom: 10 }}>
                Tech Stack
              </span>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}>
                Tools we trust.
              </h2>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {stack.map((s) => (
              <span key={s} className="pill pill-accent">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section
          className="panel"
          style={{ padding: "56px 44px", textAlign: "center" }}
        >
          <div className="panel-glow" />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 540,
              margin: "0 auto",
            }}
          >
            <span className="eyebrow" style={{ marginBottom: 14 }}>
              Work With Us
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                marginBottom: 14,
              }}
            >
              Let&apos;s build something real.
            </h2>
            <p style={{ marginBottom: 28 }}>
              Whether you&apos;re a recruiter, a founder, or a business — if
              what we do resonates, reach out. We&apos;d love to hear from you.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/projects" className="btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
