"use client";

import Link from "next/link";

const services = [
  {
    icon: "⬡",
    title: "Web Development",
    desc: "Marketing sites, landing pages, and company websites built fast and clean. Modern stack, performant, and ready to scale.",
    href: "/services#web",
  },
  {
    icon: "◈",
    title: "App Builds",
    desc: "Full product builds with auth, payments, dashboards, and user accounts. From concept to deployed product.",
    href: "/services#apps",
  },
  {
    icon: "⟁",
    title: "AI Integration",
    desc: "LLM-powered features, real-time analysis, and AI-enhanced UX. We bring intelligent tooling into your product.",
    href: "/services#ai",
  },
  {
    icon: "◎",
    title: "Consulting",
    desc: "Architecture review, stack selection, and technical direction. Sharp perspective before you write a line of code.",
    href: "/services#consult",
  },
  {
    icon: "⊕",
    title: "Collaborations",
    desc: "Partnerships with founders, agencies, and teams on meaningful builds — equity, revenue-share, or contract.",
    href: "/services#collab",
  },
  {
    icon: "✦",
    title: "Support & Maintenance",
    desc: "Remote support, bug fixes, feature additions, and performance tuning for existing codebases and live products.",
    href: "/services#support",
  },
];

const stats = [
  { num: "3", label: "Products shipped" },
  { num: "100%", label: "Deadline completion rate" },
  { num: "3-day", label: "Avg delivery cycle" },
  { num: "∞", label: "Room to scale" },
];

const featuredWork = [
  {
    tag: "Flagship · SaaS",
    title: "InkPlan",
    desc: "AI-powered tattoo training platform. Structured learning, style exploration, and subscription tiers — built from scratch as a real niche product.",
    tech: ["Next.js", "Node.js", "Express", "Auth", "REST API"],
    href: "/inkplan",
    live: "https://ink-plan-l95o.vercel.app/",
  },
];

export default function Home() {
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
          top: 160,
          background: "rgba(167,139,250,0.06)",
          animationDelay: "2s",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Hero ────────────────────────────────────── */}
        <section
          className="panel fade-up"
          style={{
            padding: "88px 56px",
            marginBottom: 72,
            textAlign: "center",
          }}
        >
          <div className="panel-glow" />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 820,
              margin: "0 auto",
            }}
          >
            <span className="eyebrow fade-up" style={{ marginBottom: 22 }}>
              IMDEV · Software Development Studio
            </span>
            <h1 className="fade-up-1" style={{ marginBottom: 26 }}>
              We build software{" "}
              <span style={{ color: "var(--accent)" }}>that ships.</span>
            </h1>
            <p
              className="fade-up-2"
              style={{
                maxWidth: 600,
                margin: "0 auto 40px",
                fontSize: "1.1rem",
              }}
            >
              Web apps, SaaS products, AI integrations, and scalable digital
              experiences — built with precision, delivered fast, and designed
              to grow with your business.
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
              <Link href="/contact" className="btn-primary">
                Start a Project
              </Link>
              <Link href="/projects" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats ───────────────────────────────────── */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 88,
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="card-flat"
              style={{ textAlign: "center", padding: "28px 16px" }}
            >
              <div className="stat-num" style={{ marginBottom: 10 }}>
                {s.num}
              </div>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.04em",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </section>

        {/* ── Services ────────────────────────────────── */}
        <section style={{ marginBottom: 88 }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="eyebrow" style={{ marginBottom: 14 }}>
              What We Build
            </span>
            <h2>Everything your product needs.</h2>
            <p style={{ maxWidth: 520, margin: "16px auto 0" }}>
              From first line of code to live product — we handle the full
              stack.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
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
                    marginTop: 18,
                    fontSize: "0.72rem",
                    fontFamily: "'JetBrains Mono', monospace",
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

        {/* ── Work ────────────────────────────────────── */}
        <section style={{ marginBottom: 88 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 44,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <span className="eyebrow" style={{ marginBottom: 12 }}>
                Our Work
              </span>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
                Products we&apos;ve built and shipped.
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
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {featuredWork.map((p) => (
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
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.68rem",
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "var(--accent)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Live →
                    </a>
                  )}
                </div>
                <h3 style={{ marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: "0.9rem", marginBottom: 20, flex: 1 }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why IMDEV ───────────────────────────────── */}
        <section style={{ marginBottom: 88 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
              <span className="eyebrow" style={{ marginBottom: 14 }}>
                Why IMDEV
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                  marginBottom: 20,
                }}
              >
                A studio built for execution.
              </h2>
              <p style={{ marginBottom: 16 }}>
                We don&apos;t just write code — we build products. Every project
                starts with understanding your business, your users, and your
                goals. Then we execute with speed and precision.
              </p>
              <p style={{ marginBottom: 32 }}>
                Leveraging modern tooling and AI to deliver faster without
                sacrificing quality. Zero missed deadlines. Clean, maintainable
                code you can hand to any team.
              </p>
              <Link
                href="/about"
                className="btn-ghost"
                style={{ minHeight: 40, fontSize: "0.72rem" }}
              >
                About IMDEV →
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                {
                  label: "Fast delivery",
                  desc: "3-day average cycle on production builds",
                },
                {
                  label: "Full stack",
                  desc: "Frontend, backend, AI, and everything between",
                },
                {
                  label: "Zero misses",
                  desc: "100% project completion rate across all work",
                },
                {
                  label: "Remote-ready",
                  desc: "Built to work with teams across any timezone",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card-flat"
                  style={{
                    padding: "18px 22px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.8rem",
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--text)",
                        marginBottom: 2,
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────── */}
        <section
          className="panel"
          style={{ padding: "72px 56px", textAlign: "center" }}
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
            <span className="eyebrow" style={{ marginBottom: 16 }}>
              Ready to Build?
            </span>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                marginBottom: 18,
              }}
            >
              Let&apos;s turn your idea into a real product.
            </h2>
            <p style={{ marginBottom: 36, fontSize: "1.05rem" }}>
              Whether you need a website, a full app, an AI integration, or a
              remote engineering partner — IMDEV is ready to execute.
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
