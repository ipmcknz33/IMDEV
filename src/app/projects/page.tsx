"use client";

import Link from "next/link";

const projects = [
  {
    title: "InkPlan",
    tag: "Flagship · SaaS",
    desc: "AI-powered tattoo training platform. Structured learning paths, style exploration, user progress tracking, REST API, and subscription tiers — built from scratch, not cloned. Currently being optimized for monetization.",
    tech: ["Next.js", "Node.js", "Express", "Auth", "REST API", "TypeScript"],
    status: "Live",
    href: "/inkplan",
    live: "https://inkplan.net/",
  },
  {
    title: "IMDEV",
    tag: "Studio Site",
    desc: "IMDEV's company platform — built as a client-facing software studio site with full service offerings, project showcase, about, and contact flow. Designed to attract clients, contracts, and remote engineering opportunities.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    status: "Live",
    href: "/",
    live: null,
  },
];

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <div
        className="orb"
        style={{
          width: 200,
          height: 200,
          right: "5%",
          top: 80,
          background: "rgba(0,245,196,0.07)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Header ───────────────────────────────────── */}
        <section
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 72px" }}
        >
          <span className="eyebrow fade-up" style={{ marginBottom: 16 }}>
            Our Work
          </span>
          <h1
            className="fade-up-1"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", marginBottom: 18 }}
          >
            Products we&apos;ve built and shipped.
          </h1>
          <p className="fade-up-2">
            Original builds — not clones, not tutorials. Real products with real
            architecture, shipped to production.
          </p>
        </section>

        {/* ── Projects ─────────────────────────────────── */}
        <section style={{ marginBottom: 88 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="panel"
                style={{ padding: "52px 48px" }}
              >
                <div className="panel-glow" />
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 32,
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 20,
                      }}
                    >
                      <span className="badge">{p.tag}</span>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.08em",
                          color: "var(--accent)",
                        }}
                      >
                        ● {p.status}
                      </span>
                    </div>
                    <h2
                      style={{
                        fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                        marginBottom: 14,
                      }}
                    >
                      {p.title}
                    </h2>
                    <p
                      style={{
                        maxWidth: 580,
                        marginBottom: 24,
                        fontSize: "0.95rem",
                      }}
                    >
                      {p.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                        marginBottom: 32,
                      }}
                    >
                      {p.tech.map((t) => (
                        <span key={t} className="pill">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <Link
                        href={p.href}
                        className="btn-secondary"
                        style={{
                          minHeight: 40,
                          fontSize: "0.72rem",
                          padding: "0 20px",
                        }}
                      >
                        View Details →
                      </Link>
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{
                            minHeight: 40,
                            fontSize: "0.72rem",
                            padding: "0 20px",
                          }}
                        >
                          Live App →
                        </a>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "clamp(4rem, 6vw, 7rem)",
                      fontWeight: 700,
                      color: "rgba(0,245,196,0.05)",
                      lineHeight: 1,
                      userSelect: "none",
                      flexShrink: 0,
                    }}
                  >
                    0{i + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── More coming ──────────────────────────────── */}
        <section style={{ marginBottom: 88, textAlign: "center" }}>
          <div
            className="card-flat"
            style={{ padding: "40px 32px", maxWidth: 560, margin: "0 auto" }}
          >
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "var(--accent)",
                letterSpacing: "0.16em",
                marginBottom: 12,
              }}
            >
              MORE COMING
            </p>
            <h3 style={{ marginBottom: 12 }}>New projects in the pipeline.</h3>
            <p style={{ fontSize: "0.9rem" }}>
              IMDEV is actively building. Check back soon or follow along on
              GitHub.
            </p>
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
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            <span className="eyebrow" style={{ marginBottom: 14 }}>
              Start a Project
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                marginBottom: 14,
              }}
            >
              Want us to build yours?
            </h2>
            <p style={{ marginBottom: 32 }}>
              Tell us what you&apos;re building. We&apos;ll come back with a
              clear plan and timeline within 24 hours.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
