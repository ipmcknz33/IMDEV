"use client";

import Link from "next/link";

const stack = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "TailwindCSS",
  "Redux",
  "Firebase",
  "Stripe",
  "Node.js",
  "Express",
  "GitHub",
  "Vercel",
  "Netlify",
  "Figma",
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

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Header ───────────────────────────────────── */}
        <section style={{ maxWidth: 760, marginBottom: 72 }}>
          <span className="eyebrow fade-up" style={{ marginBottom: 16 }}>
            About IMDEV
          </span>
          <h1
            className="fade-up-1"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", marginBottom: 24 }}
          >
            A software studio built to{" "}
            <span style={{ color: "var(--accent)" }}>execute.</span>
          </h1>
          <p
            className="fade-up-2"
            style={{ fontSize: "1.05rem", maxWidth: 640 }}
          >
            IMDEV is a software development studio specializing in web apps,
            SaaS products, AI integrations, and scalable digital experiences. We
            partner with businesses, founders, and teams who need real products
            built right — and built fast.
          </p>
        </section>

        {/* ── Studio story ─────────────────────────────── */}
        <section
          className="panel"
          style={{ padding: "52px 48px", marginBottom: 72 }}
        >
          <div className="panel-glow" />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 52,
            }}
          >
            <div>
              <span className="eyebrow" style={{ marginBottom: 14 }}>
                The Studio
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                  marginBottom: 18,
                }}
              >
                Founded on one principle — ship real products.
              </h2>
              <p style={{ marginBottom: 14 }}>
                IMDEV was founded by Isaac Mackenzie, a software engineer based
                in Honolulu, Hawaii with production experience across AI
                applications, SaaS platforms, and subscription products.
              </p>
              <p style={{ marginBottom: 14 }}>
                We leverage modern tooling, AI, and a proven development process
                to deliver faster than traditional agencies without cutting
                corners on quality or architecture.
              </p>
              <p>
                Currently a lean, focused studio — built to scale into a full
                team as the right projects and partners come along.
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
                  "Modern stack — Next.js, React, TypeScript, AI",
                  "Clean, maintainable code any team can inherit",
                  "AI-augmented development for faster delivery",
                  "Remote-first, async-friendly, zero drama",
                  "Transparent scopes and realistic timelines",
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
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.8rem",
                        marginTop: 2,
                        flexShrink: 0,
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

        {/* ── Founder ──────────────────────────────────── */}
        <section style={{ marginBottom: 72 }}>
          <span
            className="eyebrow"
            style={{ marginBottom: 24, display: "block" }}
          >
            The Founder
          </span>
          <div className="panel" style={{ padding: "44px 48px" }}>
            <div className="panel-glow" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 20,
                  marginBottom: 28,
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                      marginBottom: 6,
                    }}
                  >
                    Isaac Mackenzie
                  </h2>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.8rem",
                      color: "var(--accent)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Founder & Software Engineer · Honolulu, Hawaii
                  </p>
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a
                    href="https://www.linkedin.com/in/isaac-mackenzie-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      minHeight: 38,
                      fontSize: "0.68rem",
                      padding: "0 16px",
                    }}
                  >
                    LinkedIn →
                  </a>
                  <a
                    href="https://github.com/ipmcknz33"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{
                      minHeight: 38,
                      fontSize: "0.68rem",
                      padding: "0 16px",
                    }}
                  >
                    GitHub →
                  </a>
                  <a
                    href="https://c-users-imckn-one-drive-desktop-tur.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{
                      minHeight: 38,
                      fontSize: "0.68rem",
                      padding: "0 16px",
                    }}
                  >
                    Portfolio →
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 32,
                }}
              >
                <div>
                  <p style={{ marginBottom: 14 }}>
                    Software engineer and founder specializing in React,
                    Next.js, and TypeScript. Creator of InkPlan — a live
                    AI-powered SaaS currently being optimized for monetization.
                  </p>
                  <p>
                    Open to remote engineering contracts and long-term
                    partnerships with teams who need a sharp, reliable technical
                    collaborator.
                  </p>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  {[
                    {
                      role: "Software Developer",
                      company: "Frontend Simplified",
                      period: "Sep 2025 – Present",
                    },
                  ].map((exp) => (
                    <div
                      key={exp.company}
                      style={{
                        padding: "14px 18px",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-md)",
                        background: "var(--bg-surface)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          color: "var(--text)",
                          marginBottom: 4,
                        }}
                      >
                        {exp.role}
                      </p>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--accent)",
                          fontFamily: "'JetBrains Mono', monospace",
                          marginBottom: 2,
                        }}
                      >
                        {exp.company}
                      </p>
                      <p
                        style={{
                          fontSize: "0.74rem",
                          color: "var(--text-muted)",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {exp.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tech stack ───────────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <span
            className="eyebrow"
            style={{ marginBottom: 20, display: "block" }}
          >
            Our Stack
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
              gap: 10,
            }}
          >
            {stack.map((s) => (
              <span
                key={s}
                className="pill pill-accent"
                style={{ justifyContent: "center" }}
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section
          className="panel"
          style={{ padding: "56px 48px", textAlign: "center" }}
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
              Ready to build something real?
            </h2>
            <p style={{ marginBottom: 28 }}>
              Whether you&apos;re a founder, a business, or a team looking for a
              remote engineering partner — let&apos;s talk.
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
                See Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
