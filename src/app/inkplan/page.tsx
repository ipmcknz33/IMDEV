"use client";

import Link from "next/link";

const features = [
  {
    icon: "⬡",
    title: "Guided Learning Paths",
    desc: "Structured progression from fundamentals to advanced styles. Students follow a clear path instead of random content.",
  },
  {
    icon: "◈",
    title: "Style Explorer",
    desc: "Curated reference libraries organized by tattoo style — traditional, realism, blackwork, neo-trad, and more.",
  },
  {
    icon: "⟁",
    title: "AI-Powered Feedback",
    desc: "Upload practice work and receive AI-generated critique based on the style being studied and technical benchmarks.",
  },
  {
    icon: "◎",
    title: "Progress Tracking",
    desc: "Visual milestones and skill tracking that show exactly where a student is and what to focus on next.",
  },
  {
    icon: "⊕",
    title: "Subscription Tiers",
    desc: "Trial, subscription, and premium access — each unlocking deeper content, community features, and live feedback.",
  },
  {
    icon: "✦",
    title: "REST API",
    desc: "Custom backend built with Node.js and Express. Auth, user data, progress tracking, and content delivery.",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "REST API",
  "Authentication",
  "User Profiles",
  "Stripe",
  "Vercel",
];

const buildHighlights = [
  { label: "Type", value: "Original SaaS — not a clone" },
  { label: "Backend", value: "Custom Node.js + Express REST API" },
  { label: "Auth", value: "Full authentication and user profiles" },
  { label: "Status", value: "Live — premium tier in development" },
  { label: "Built by", value: "IMDEV / Isaac Mackenzie" },
];

export default function InkPlanPage() {
  return (
    <main className="page-shell">
      <div
        className="orb"
        style={{
          width: 240,
          height: 240,
          left: "4%",
          top: 60,
          background: "rgba(0,245,196,0.07)",
        }}
      />
      <div
        className="orb"
        style={{
          width: 180,
          height: 180,
          right: "6%",
          top: 180,
          background: "rgba(167,139,250,0.07)",
          animationDelay: "2s",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Hero ─────────────────────────────────────── */}
        <section
          className="panel fade-up"
          style={{
            padding: "72px 56px",
            marginBottom: 72,
            textAlign: "center",
          }}
        >
          <div className="panel-glow" />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginBottom: 22,
              }}
            >
              <span className="badge">Flagship Product</span>
              <span
                className="badge"
                style={{
                  borderColor: "rgba(167,139,250,0.3)",
                  background: "rgba(167,139,250,0.1)",
                  color: "var(--purple)",
                }}
              >
                Original Build
              </span>
              <span
                className="badge"
                style={{
                  borderColor: "rgba(167,139,250,0.3)",
                  background: "rgba(167,139,250,0.1)",
                  color: "var(--purple)",
                }}
              >
                AI-Powered
              </span>
            </div>
            <h1 className="fade-up-1" style={{ marginBottom: 12 }}>
              Ink<span style={{ color: "var(--accent)" }}>Plan</span>
            </h1>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.78rem",
                letterSpacing: "0.16em",
                color: "var(--text-muted)",
                marginBottom: 24,
              }}
            >
              AI-POWERED TATTOO TRAINING PLATFORM
            </p>
            <p
              className="fade-up-2"
              style={{
                maxWidth: 580,
                margin: "0 auto 36px",
                fontSize: "1.05rem",
              }}
            >
              A full-stack SaaS built from scratch — not cloned, not a tutorial
              project. InkPlan is a real product with a real backend, real
              authentication, and a real market. Premium features currently in
              development.
            </p>
            <div
              className="fade-up-3"
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://ink-plan-l95o.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Live App →
              </a>
              <Link href="/contact" className="btn-secondary">
                Discuss This Build
              </Link>
            </div>
          </div>
        </section>

        {/* ── Build highlights ─────────────────────────── */}
        <section style={{ marginBottom: 72 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            {buildHighlights.map((h) => (
              <div
                key={h.label}
                className="card-flat"
                style={{ padding: "20px 24px" }}
              >
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.66rem",
                    color: "var(--accent)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {h.label}
                </p>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-soft)",
                    lineHeight: 1.5,
                  }}
                >
                  {h.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ─────────────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>
              What We Built
            </span>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
              A real product with real features.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {features.map((f) => (
              <div key={f.title} className="card">
                <div className="icon-box" style={{ marginBottom: 16 }}>
                  {f.icon}
                </div>
                <h3 style={{ marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: "0.9rem" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Stack ────────────────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>
              Tech Stack
            </span>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
              Built to last and scale.
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
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
          style={{ padding: "64px 48px", textAlign: "center" }}
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
              Want something like this?
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                marginBottom: 14,
              }}
            >
              We build original products for real markets.
            </h2>
            <p style={{ marginBottom: 32 }}>
              IMDEV specializes in building focused, well-architected products
              for niche markets. If you have an idea — let&apos;s build it.
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
                Start a Conversation
              </Link>
              <Link href="/projects" className="btn-secondary">
                More Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
