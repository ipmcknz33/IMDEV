"use client";

import Link from "next/link";
import { useState } from "react";

const filters = ["All", "Web Dev", "App Build", "AI", "Flagship"];

const projects = [
  {
    title: "InkPlan",
    tag: "Flagship",
    category: "App Build",
    filters: ["Flagship", "App Build", "AI"],
    desc: "AI-powered tattoo training platform with structured learning, style exploration, and tiered subscription access.",
    tech: ["Next.js", "AI Integration", "Subscriptions", "Tailwind"],
    status: "Live",
    href: "/inkplan",
    featured: true,
  },
  {
    title: "IMDEV Platform",
    tag: "Company Site",
    category: "Web Dev",
    filters: ["Web Dev"],
    desc: "The IMDEV company website — recruiter-ready, client-facing, built from scratch with a focus on scalability and brand clarity.",
    tech: ["Next.js", "Tailwind v4", "Framer Motion"],
    status: "Live",
    href: "/",
    featured: false,
  },
  {
    title: "AI Dashboard",
    tag: "App Build",
    category: "AI",
    filters: ["App Build", "AI"],
    desc: "Intelligent product analytics dashboard with LLM-powered insights and natural language querying of data.",
    tech: ["React", "OpenAI API", "Recharts"],
    status: "In Progress",
    href: "/projects",
    featured: false,
  },
  {
    title: "Client Portal",
    tag: "Web Dev",
    category: "Web Dev",
    filters: ["Web Dev", "App Build"],
    desc: "Secure client-facing portal with project tracking, file sharing, and real-time status updates.",
    tech: ["Next.js", "Auth", "Prisma"],
    status: "Shipped",
    href: "/projects",
    featured: false,
  },
];

const statusColor: Record<string, string> = {
  Live:        "var(--accent)",
  Shipped:     "var(--accent)",
  "In Progress": "var(--purple)",
};

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const visible = active === "All"
    ? projects
    : projects.filter((p) => p.filters.includes(active));

  return (
    <main className="page-shell">
      <div className="orb" style={{ width: 200, height: 200, right: "5%", top: 80, background: "rgba(0,245,196,0.07)" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Header ───────────────────────────────────── */}
        <section style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
          <span className="eyebrow fade-up" style={{ marginBottom: 16 }}>Projects</span>
          <h1 className="fade-up-1" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", marginBottom: 18 }}>
            Work we&apos;re proud to ship.
          </h1>
          <p className="fade-up-2">
            A growing portfolio of web apps, product builds, and AI-enhanced
            experiences — each one built with intent.
          </p>
        </section>

        {/* ── Filters ──────────────────────────────────── */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: "1px solid",
                borderColor: active === f ? "var(--border-accent)" : "var(--border)",
                background:  active === f ? "var(--accent-dim)" : "var(--bg-surface)",
                color:       active === f ? "var(--accent)" : "var(--text-muted)",
                fontFamily:  "'Space Mono', monospace",
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

        {/* ── Project grid ─────────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {visible.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: 0 }}
              >
                {/* Top row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                  <span className="badge">{p.tag}</span>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    color: statusColor[p.status] ?? "var(--text-muted)",
                  }}>
                    ● {p.status}
                  </span>
                </div>

                <h3 style={{ marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: "0.9rem", marginBottom: 20, flex: 1 }}>{p.desc}</p>

                {/* Tech pills */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                  {p.tech.map((t) => (
                    <span key={t} className="pill" style={{ fontSize: "0.66rem" }}>{t}</span>
                  ))}
                </div>

                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.08em" }}>
                  View Project →
                </span>
              </Link>
            ))}
          </div>

          {visible.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-muted)", fontFamily: "'Space Mono', monospace", fontSize: "0.8rem" }}>
              No projects in this category yet.
            </div>
          )}
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="panel" style={{ padding: "56px 44px", textAlign: "center" }}>
          <div className="panel-glow" />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 520, margin: "0 auto" }}>
            <span className="eyebrow" style={{ marginBottom: 14 }}>Have a project in mind?</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", marginBottom: 14 }}>
              Let&apos;s add yours to the list.
            </h2>
            <p style={{ marginBottom: 28 }}>
              Reach out and tell us what you&apos;re building. We&apos;ll figure out the rest together.
            </p>
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </section>

      </div>
    </main>
  );
}