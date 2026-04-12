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

const experience = [
  {
    role: "Frontend Engineer",
    company: "Skinstric AI",
    period: "March 2026 – Present",
    type: "Remote",
    bullets: [
      "Built AI-powered skincare analysis app using Next.js and API integrations",
      "Developed responsive UI with TailwindCSS and GSAP animations",
      "Optimized performance achieving ~2 second analysis results",
      "Designed reusable components for scalability and consistent UX",
    ],
  },
  {
    role: "Software Developer",
    company: "Frontend Simplified",
    period: "Sep 2025 – Present",
    type: "Remote",
    bullets: [
      "Completed production-level apps within 3-day delivery cycles",
      "Maintained 100% project completion rate across all work",
      "Operated across 3 concurrent roles with zero missed deadlines",
      "Delivered multiple full-stack and frontend apps using React, Next.js, TypeScript",
    ],
  },
];

const values = [
  {
    icon: "⬡",
    title: "Ships fast.",
    desc: "3-day delivery cycles on production apps. Speed without cutting corners on quality or architecture.",
  },
  {
    icon: "◈",
    title: "Zero missed deadlines.",
    desc: "100% completion rate across all roles and projects. Reliable execution is non-negotiable.",
  },
  {
    icon: "⟁",
    title: "AI-ready.",
    desc: "Already building with AI integrations in production — not just talking about it.",
  },
  {
    icon: "◎",
    title: "Remote-first.",
    desc: "Proven track record working across multiple remote roles simultaneously with strong communication.",
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

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Header ───────────────────────────────────── */}
        <section style={{ maxWidth: 720, marginBottom: 72 }}>
          <span className="eyebrow fade-up" style={{ marginBottom: 16 }}>
            About
          </span>
          <h1
            className="fade-up-1"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", marginBottom: 24 }}
          >
            Isaac Mackenzie —{" "}
            <span style={{ color: "var(--accent)" }}>Frontend Engineer.</span>
          </h1>
          <p
            className="fade-up-2"
            style={{ fontSize: "1.05rem", maxWidth: 620, marginBottom: 24 }}
          >
            Honolulu, Hawaii · Open to remote roles globally. Frontend-focused
            developer specializing in React, Next.js, and TypeScript with
            production experience across AI apps, SaaS platforms, and
            subscription products.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://www.linkedin.com/in/isaac-mackenzie-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ minHeight: 40, fontSize: "0.72rem" }}
            >
              LinkedIn →
            </a>
            <a
              href="https://github.com/ipmcknz33"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ minHeight: 40, fontSize: "0.72rem" }}
            >
              GitHub →
            </a>
            <a
              href="https://c-users-imckn-one-drive-desktop-tur.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ minHeight: 40, fontSize: "0.72rem" }}
            >
              Portfolio →
            </a>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────── */}
        <section style={{ marginBottom: 72 }}>
          <span
            className="eyebrow"
            style={{ marginBottom: 24, display: "block" }}
          >
            Experience
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {experience.map((e) => (
              <div
                key={e.company}
                className="panel"
                style={{ padding: "36px 40px" }}
              >
                <div className="panel-glow" />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: 20,
                      flexWrap: "wrap",
                      gap: 12,
                    }}
                  >
                    <div>
                      <h3 style={{ marginBottom: 4 }}>{e.role}</h3>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--accent)",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {e.company} · {e.type}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {e.period}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {e.bullets.map((b) => (
                      <div
                        key={b}
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
                          style={{
                            fontSize: "0.9rem",
                            color: "var(--text-soft)",
                          }}
                        >
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why hire me ──────────────────────────────── */}
        <section style={{ marginBottom: 72 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>
              Why Hire Me
            </span>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
              What I bring to your team.
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
          <span
            className="eyebrow"
            style={{ marginBottom: 20, display: "block" }}
          >
            Tech Stack
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {stack.map((s) => (
              <span key={s} className="pill pill-accent">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ── Education ────────────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <span
            className="eyebrow"
            style={{ marginBottom: 24, display: "block" }}
          >
            Education
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                school: "Frontend Simplified",
                program: "Full Stack Engineering Program",
                period: "Sep 2025 – 2026",
                note: "React, Next.js, TypeScript, APIs, Full-Stack",
              },
              {
                school: "Art Institute of Phoenix",
                program: "Graphic Design & Web Design",
                period: "2013 – 2014",
                note: "3 semesters toward AAS · GPA 3.0–3.5",
              },
              {
                school: "Arizona Automotive Institute",
                program: "Associate Degree — HVAC",
                period: "Graduated 2010",
                note: "GPA 3.9",
              },
            ].map((ed) => (
              <div key={ed.school} className="card-flat">
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.68rem",
                    color: "var(--accent)",
                    letterSpacing: "0.1em",
                    marginBottom: 10,
                  }}
                >
                  {ed.period}
                </p>
                <h4 style={{ marginBottom: 6 }}>{ed.school}</h4>
                <p style={{ fontSize: "0.88rem", marginBottom: 8 }}>
                  {ed.program}
                </p>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  {ed.note}
                </p>
              </div>
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
              Open to Remote Work
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                marginBottom: 14,
              }}
            >
              Let&apos;s work together.
            </h2>
            <p style={{ marginBottom: 28 }}>
              Looking for remote frontend or full-stack roles. Fast execution,
              clean code, zero missed deadlines. Let&apos;s talk.
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
                Contact Me
              </Link>
              <Link href="/projects" className="btn-secondary">
                See My Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
