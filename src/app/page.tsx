"use client";

import Link from "next/link";

const services = [
  {
    icon: "⬡",
    title: "Web Development",
    desc: "Fast, scalable websites and web apps built with modern stacks — Next.js, React, Tailwind, and beyond.",
    href: "/services#web",
  },
  {
    icon: "◈",
    title: "App Builds",
    desc: "Full product builds from concept to deployment. Clean architecture, polished UI, real-world ready.",
    href: "/services#apps",
  },
  {
    icon: "⟁",
    title: "AI Integration",
    desc: "Embed intelligent features into your product — LLM workflows, AI-powered UX, and automation layers.",
    href: "/services#ai",
  },
  {
    icon: "◎",
    title: "Consulting",
    desc: "Strategy, architecture review, and product direction for teams who need a sharp technical perspective.",
    href: "/services#consult",
  },
  {
    icon: "⊕",
    title: "Collaborations",
    desc: "Open to working with founders, agencies, and developers on meaningful builds and product partnerships.",
    href: "/services#collab",
  },
];

const stats = [
  { num: "5+", label: "Services offered" },
  { num: "10+", label: "Projects shipped" },
  { num: "100%", label: "Client-focused" },
  { num: "∞", label: "Room to scale" },
];

const featuredProjects = [
  {
    tag: "Flagship",
    title: "InkPlan",
    desc: "AI-powered tattoo training platform. Structured learning, style exploration, tiered access — built like a real niche product.",
    tech: ["Next.js", "AI", "Subscriptions"],
    href: "/inkplan",
  },
  {
    tag: "Web App",
    title: "IMDEV Platform",
    desc: "The site you're on right now — recruiter-ready, client-facing, scalable company platform built from scratch.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    href: "/projects",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      {/* Orbs */}
      <div
        className="orb"
        style={{
          width: 220,
          height: 220,
          left: "6%",
          top: 80,
          background: "rgba(0,245,196,0.07)",
        }}
      />
      <div
        className="orb"
        style={{
          width: 180,
          height: 180,
          right: "8%",
          top: 140,
          background: "rgba(167,139,250,0.06)",
          animationDelay: "2s",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Hero ────────────────────────────────────── */}
        <section
          className="panel fade-up"
          style={{
            padding: "80px 48px",
            marginBottom: 72,
            textAlign: "center",
          }}
        >
          <div className="panel-glow" />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 780,
              margin: "0 auto",
            }}
          >
            <span className="eyebrow fade-up" style={{ marginBottom: 20 }}>
              IMDEV · Est. 2025
            </span>

            <h1 className="fade-up-1" style={{ marginBottom: 24 }}>
              We build products that{" "}
              <span style={{ color: "var(--accent)" }}>actually work.</span>
            </h1>

            <p
              className="fade-up-2"
              style={{
                maxWidth: 580,
                margin: "0 auto 36px",
                fontSize: "1.05rem",
              }}
            >
              Web development, app builds, AI integration, consulting, and
              collaborations — all under one sharp, focused studio.
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
              <Link href="/services" className="btn-primary">
                See What We Build
              </Link>
              <Link href="/projects" className="btn-secondary">
                View Projects
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats ───────────────────────────────────── */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 16,
            marginBottom: 72,
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="card-flat"
              style={{ textAlign: "center", padding: "24px 16px" }}
            >
              <div className="stat-num" style={{ marginBottom: 8 }}>
                {s.num}
              </div>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  fontFamily: "'Space Mono', monospace",
                  letterSpacing: "0.06em",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </section>

        {/* ── Services ────────────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>
              What We Do
            </span>
            <h2>Full-spectrum product development.</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="card"
                style={{ display: "block" }}
              >
                <div
                  className="icon-box"
                  style={{ marginBottom: 18, fontSize: "1.4rem" }}
                >
                  {s.icon}
                </div>
                <h3 style={{ marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: "0.9rem" }}>{s.desc}</p>
                <p
                  style={{
                    marginTop: 16,
                    fontSize: "0.72rem",
                    fontFamily: "'Space Mono', monospace",
                    color: "var(--accent)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Featured Projects ────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 40,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <span className="eyebrow" style={{ marginBottom: 10 }}>
                Featured Work
              </span>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
                Products we&apos;re proud of.
              </h2>
            </div>
            <Link
              href="/projects"
              className="btn-ghost"
              style={{ minHeight: 40, fontSize: "0.72rem" }}
            >
              All Projects →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {featuredProjects.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="card"
                style={{ display: "block" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 18,
                  }}
                >
                  <span className="badge">{p.tag}</span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "'Space Mono', monospace",
                      color: "var(--accent)",
                    }}
                  >
                    →
                  </span>
                </div>
                <h3 style={{ marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: "0.9rem", marginBottom: 20 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────── */}
        <section
          className="panel"
          style={{ padding: "64px 48px", textAlign: "center" }}
        >
          <div className="panel-glow" />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 620,
              margin: "0 auto",
            }}
          >
            <span className="eyebrow" style={{ marginBottom: 14 }}>
              Ready to Build?
            </span>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                marginBottom: 16,
              }}
            >
              Let&apos;s turn your idea into a real product.
            </h2>
            <p style={{ marginBottom: 32 }}>
              Whether you need a website, a full app build, or an AI integration
              — IMDEV is ready to execute with you.
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
                Start a Project
              </Link>
              <Link href="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
