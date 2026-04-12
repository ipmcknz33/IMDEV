"use client";

import Link from "next/link";
import { useState } from "react";

const filters = ["All", "SaaS", "AI", "Web App", "Flagship"];

const projects = [
  {
    title: "InkPlan",
    tag: "Flagship",
    filters: ["All", "Flagship", "SaaS", "AI"],
    desc: "AI-powered tattoo training SaaS. Structured learning paths, style exploration, user progress tracking, REST API, and subscription tiers — built from scratch, not cloned.",
    tech: ["Next.js", "Node.js", "Express", "Auth", "REST API"],
    status: "Live",
    href: "/inkplan",
    live: "https://ink-plan-l95o.vercel.app/",
  },
  {
    title: "Summarist",
    tag: "SaaS",
    filters: ["All", "SaaS", "Web App"],
    desc: "Full-stack subscription platform with Firebase authentication, protected routes, Stripe payment integration, and scalable UI architecture.",
    tech: ["Next.js", "Firebase", "Stripe", "TypeScript"],
    status: "Shipped",
    href: "/projects",
    live: null,
  },
  {
    title: "Skinstric",
    tag: "AI App",
    filters: ["All", "AI", "Web App"],
    desc: "AI skincare analysis application with camera-to-analysis workflow, real-time feedback, GSAP animations, and ~2 second analysis results. Built for a live client.",
    tech: ["Next.js", "AI", "GSAP", "TailwindCSS"],
    status: "Live",
    href: "/projects",
    live: null,
  },
  {
    title: "IMDEV",
    tag: "Web",
    filters: ["All", "Web App"],
    desc: "The site you're on — IMDEV's company platform. Built as a client-facing studio site with full service offerings, project showcase, and contact flow.",
    tech: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    status: "Live",
    href: "/",
    live: null,
  },
];

const statusColor: Record<string, string> = {
  Live: "var(--accent)",
  Shipped: "var(--accent)",
  "In Progress": "var(--purple)",
};

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const visible = projects.filter((p) => p.filters.includes(active));

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
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}
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
            A growing portfolio of web apps, SaaS products, and AI-powered
            experiences — each one built with intent and shipped to production.
          </p>
        </section>

        {/* ── Filters ──────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 52,
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: "1px solid",
                borderColor:
                  active === f ? "var(--border-accent)" : "var(--border)",
                background:
                  active === f ? "var(--accent-dim)" : "var(--bg-surface)",
                color: active === f ? "var(--accent)" : "var(--text-muted)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Grid ─────────────────────────────────────── */}
        <section style={{ marginBottom: 88 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {visible.map((p) => (
              <div
                key={p.title}
                className="card"
                style={{ display: "flex", flexDirection: "column" }}
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
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      color: statusColor[p.status] ?? "var(--text-muted)",
                    }}
                  >
                    ● {p.status}
                  </span>
                </div>
                <h3 style={{ marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: "0.9rem", marginBottom: 20, flex: 1 }}>
                  {p.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 20,
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="pill"
                      style={{ fontSize: "0.66rem" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <Link
                    href={p.href}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      color: "var(--accent)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    View Project →
                  </Link>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.7rem",
                        color: "var(--text-muted)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {visible.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "60px 0",
                color: "var(--text-muted)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
              }}
            >
              No projects in this category yet.
            </div>
          )}
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
