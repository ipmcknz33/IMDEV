"use client";

import Link from "next/link";

const services = [
  {
    icon: "⬡",
    title: "Web Development",
    desc: "Fast, scalable websites and web apps built with Next.js, React, TypeScript, and Tailwind CSS.",
    href: "/services#web",
  },
  {
    icon: "◈",
    title: "App Builds",
    desc: "Full product builds from concept to deployment — auth, payments, dashboards, and clean architecture.",
    href: "/services#apps",
  },
  {
    icon: "⟁",
    title: "AI Integration",
    desc: "Embed intelligent features into your product — LLM workflows, AI-powered UX, and real-time analysis.",
    href: "/services#ai",
  },
  {
    icon: "◎",
    title: "Consulting",
    desc: "Technical direction, architecture review, and product strategy for teams who need sharp execution.",
    href: "/services#consult",
  },
  {
    icon: "⊕",
    title: "Collaborations",
    desc: "Open to working with founders, agencies, and developers on meaningful builds and partnerships.",
    href: "/services#collab",
  },
];

const stats = [
  { num: "3", label: "Production apps shipped" },
  { num: "2", label: "Active roles" },
  { num: "100%", label: "Deadline completion rate" },
  { num: "3-day", label: "Avg delivery cycle" },
];

const featuredProjects = [
  {
    tag: "SaaS · Flagship",
    title: "InkPlan",
    desc: "Full-stack tattoo training SaaS with authentication, user progress tracking, REST API, and subscription tiers built with Node.js and Express.",
    tech: ["Next.js", "Node.js", "Express", "Auth"],
    href: "/inkplan",
    live: "https://ink-plan-l95o.vercel.app/",
  },
  {
    tag: "SaaS · Subscription",
    title: "Summarist",
    desc: "Full-stack subscription platform with Firebase auth, protected routes, Stripe payments, and scalable UI architecture.",
    tech: ["Next.js", "Firebase", "Stripe", "TypeScript"],
    href: "/projects",
    live: null,
  },
  {
    tag: "AI · Skincare",
    title: "Skinstric",
    desc: "AI-powered skincare analysis app with camera-to-analysis workflow, real-time feedback, and GSAP animations. Built at Skinstric AI.",
    tech: ["Next.js", "AI", "GSAP", "TailwindCSS"],
    href: "/projects",
    live: null,
  },
];

export default function Home() {
  return (
    <main className="page-shell">
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
              IMDEV · Isaac Mackenzie
            </span>

            <h1 className="fade-up-1" style={{ marginBottom: 24 }}>
              Frontend engineer who{" "}
              <span style={{ color: "var(--accent)" }}>ships fast.</span>
            </h1>

            <p
              className="fade-up-2"
              style={{
                maxWidth: 580,
                margin: "0 auto 36px",
                fontSize: "1.05rem",
              }}
            >
              React · Next.js · TypeScript · AI Integration. Building
              production-level apps with clean architecture, fast delivery
              cycles, and real product thinking.
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
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn-secondary">
                Hire Me
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
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.04em",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
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
                Production apps I&apos;ve built.
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
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {featuredProjects.map((p) => (
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

        {/* ── Services ────────────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>
              What I Do
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
              Open to Work
            </span>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                marginBottom: 16,
              }}
            >
              Looking for remote frontend roles.
            </h2>
            <p style={{ marginBottom: 32 }}>
              Frontend engineer with production experience in React, Next.js,
              and TypeScript. Available for full-time remote positions — fast
              learner, zero missed deadlines.
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
                Get In Touch
              </Link>
              <Link href="/about" className="btn-secondary">
                View Resume
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
