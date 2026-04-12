"use client";

import Link from "next/link";

const features = [
  {
    icon: "⬡",
    title: "Guided Practice",
    desc: "Structured learning paths instead of random content. Students follow a clear progression from fundamentals to advanced styles.",
  },
  {
    icon: "◈",
    title: "Style Exploration",
    desc: "Curated reference libraries organized by tattoo style — traditional, realism, blackwork, neo-trad, and more.",
  },
  {
    icon: "⟁",
    title: "AI-Powered Feedback",
    desc: "Upload practice work and receive AI-generated critique based on the style being learned and technical benchmarks.",
  },
  {
    icon: "◎",
    title: "Tiered Access",
    desc: "Trial, subscription, and premium tiers — each unlocking deeper content, community features, and live feedback sessions.",
  },
  {
    icon: "⊕",
    title: "Progress Tracking",
    desc: "Visual milestones and skill trees that show exactly where a student is and what they should focus on next.",
  },
  {
    icon: "✦",
    title: "Community Layer",
    desc: "Peer review, mentor matching, and a curated feed of high-quality practice work to stay inspired.",
  },
];

const tiers = [
  {
    name: "Trial",
    price: "Free",
    desc: "See the platform and try the fundamentals.",
    items: [
      "3 guided modules",
      "Style reference library",
      "Basic progress tracker",
    ],
    accent: false,
  },
  {
    name: "Subscription",
    price: "$29/mo",
    desc: "Full access to structured learning and AI tools.",
    items: [
      "All guided modules",
      "AI practice feedback",
      "Style deep-dives",
      "Community access",
    ],
    accent: true,
  },
  {
    name: "Premium",
    price: "$79/mo",
    desc: "For serious students — everything, plus mentorship.",
    items: [
      "Everything in Subscription",
      "Live mentor sessions",
      "Portfolio review",
      "Priority feedback",
    ],
    accent: false,
  },
];

const stack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "OpenAI API",
  "Stripe",
  "Prisma",
  "PostgreSQL",
  "Vercel",
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
                marginBottom: 20,
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
                AI-Powered
              </span>
            </div>
            <h1 className="fade-up-1" style={{ marginBottom: 10 }}>
              Ink<span style={{ color: "var(--accent)" }}>Plan</span>
            </h1>
            <p
              className="fade-up-1"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.78rem",
                letterSpacing: "0.16em",
                color: "var(--text-muted)",
                marginBottom: 28,
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
              Structured learning, style exploration, and AI-guided feedback for
              tattoo artists at every level — built like a real niche product
              with room to scale.
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
              <a href="#tiers" className="btn-primary">
                View Plans
              </a>
              <Link href="/contact" className="btn-secondary">
                Discuss This Build
              </Link>
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>
              Platform Features
            </span>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
              Built for real learning outcomes.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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

        {/* ── Tiers ────────────────────────────────────── */}
        <section id="tiers" style={{ marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>
              Pricing Tiers
            </span>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
              A path for every student.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {tiers.map((t) => (
              <div
                key={t.name}
                className="card-flat"
                style={{
                  borderColor: t.accent
                    ? "var(--border-accent)"
                    : "var(--border)",
                  background: t.accent
                    ? "rgba(0,245,196,0.04)"
                    : "var(--bg-surface)",
                  position: "relative",
                }}
              >
                {t.accent && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <span className="badge">Most Popular</span>
                  </div>
                )}
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: 10,
                  }}
                >
                  {t.name}
                </p>
                <div className="stat-num" style={{ marginBottom: 6 }}>
                  {t.price}
                </div>
                <p style={{ fontSize: "0.88rem", marginBottom: 20 }}>
                  {t.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginBottom: 24,
                  }}
                >
                  {t.items.map((item) => (
                    <div
                      key={item}
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <span
                        style={{ color: "var(--accent)", fontSize: "0.8rem" }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--text-soft)",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={t.accent ? "btn-primary" : "btn-secondary"}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tech stack ───────────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>
              Tech Stack
            </span>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
              Built to last.
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
          style={{ padding: "56px 44px", textAlign: "center" }}
        >
          <div className="panel-glow" />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            <span className="eyebrow" style={{ marginBottom: 14 }}>
              Interested in InkPlan?
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                marginBottom: 14,
              }}
            >
              Want a build like this for your niche?
            </h2>
            <p style={{ marginBottom: 28 }}>
              IMDEV builds focused, AI-powered products for underserved markets.
              Let&apos;s talk about yours.
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
