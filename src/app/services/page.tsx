"use client";

import Link from "next/link";

const services = [
  {
    id: "web",
    icon: "⬡",
    title: "Web Development",
    tag: "Core Service",
    desc: "Marketing sites, landing pages, and company websites that perform. We build fast, clean, and scalable — optimized for search, designed for conversion, and easy to maintain.",
    bullets: [
      "Next.js, React, Tailwind CSS",
      "Responsive and accessible across all devices",
      "SEO-ready architecture from day one",
      "CMS integration on request",
      "Deployment and hosting setup included",
    ],
    cta: "Start a Web Project",
  },
  {
    id: "apps",
    icon: "◈",
    title: "App Builds",
    tag: "Product Dev",
    desc: "Full product development from idea to deployed app. We handle architecture, UI, backend integration, auth, payments, and everything in between — so you get a real product, not a prototype.",
    bullets: [
      "Product scoping and roadmapping",
      "Frontend and full-stack builds",
      "Auth, payments, and user dashboards",
      "Mobile-responsive web apps",
      "Scalable, maintainable codebase",
    ],
    cta: "Build Your App",
  },
  {
    id: "ai",
    icon: "⟁",
    title: "AI Integration",
    tag: "Emerging Tech",
    desc: "Bring AI into your product intelligently. We design and implement LLM-powered features, automation workflows, and AI-enhanced UX that actually serve your users — not just demo well.",
    bullets: [
      "LLM API integration (OpenAI, Anthropic)",
      "AI-powered product features",
      "Prompt engineering and optimization",
      "Automation pipelines",
      "Responsible, production-ready implementation",
    ],
    cta: "Integrate AI",
  },
  {
    id: "consult",
    icon: "◎",
    title: "Consulting",
    tag: "Strategy",
    desc: "Sharp technical perspective for founders, product teams, and businesses. We help you make the right decisions before you write a line of code — or audit and improve what already exists.",
    bullets: [
      "Technical architecture review",
      "Stack selection and planning",
      "Product strategy sessions",
      "Code and UX audits",
      "Team structure and hiring advice",
    ],
    cta: "Book a Consult",
  },
  {
    id: "collab",
    icon: "⊕",
    title: "Collaborations",
    tag: "Partnerships",
    desc: "Open to meaningful partnerships with founders, agencies, and developers. If you have a vision that needs sharp execution, let's talk about how we build it together.",
    bullets: [
      "Founder and startup partnerships",
      "Agency white-label work",
      "Developer team-ups",
      "Equity or revenue-share models",
      "Long-term product partnerships",
    ],
    cta: "Propose a Collab",
  },
  {
    id: "support",
    icon: "✦",
    title: "Support & Maintenance",
    tag: "Ongoing",
    desc: "Remote support, bug fixes, feature additions, and performance tuning for existing products. We slot into your existing codebase and keep things running — or make them better.",
    bullets: [
      "Bug fixes and performance optimization",
      "Feature additions to existing products",
      "Code refactoring and cleanup",
      "Remote engineering contracts",
      "On-call support arrangements",
    ],
    cta: "Get Support",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "We learn your goals, constraints, and vision before anything else.",
  },
  {
    step: "02",
    title: "Scope",
    desc: "Clear deliverables, timeline, and approach — no surprises.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Execution with regular updates and your input throughout.",
  },
  {
    step: "04",
    title: "Ship",
    desc: "Deployed, tested, and handed off clean with documentation.",
  },
];

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <div
        className="orb"
        style={{
          width: 200,
          height: 200,
          left: "5%",
          top: 60,
          background: "rgba(0,245,196,0.07)",
        }}
      />
      <div
        className="orb"
        style={{
          width: 160,
          height: 160,
          right: "6%",
          top: 200,
          background: "rgba(167,139,250,0.06)",
          animationDelay: "3s",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Header ───────────────────────────────────── */}
        <section
          style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 80px" }}
        >
          <span className="eyebrow fade-up" style={{ marginBottom: 16 }}>
            Services
          </span>
          <h1
            className="fade-up-1"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", marginBottom: 20 }}
          >
            Everything your product needs.
          </h1>
          <p className="fade-up-2" style={{ fontSize: "1.05rem" }}>
            From first line of code to live product — IMDEV handles web
            development, app builds, AI features, consulting, and long-term
            partnerships.
          </p>
        </section>

        {/* ── Service cards ────────────────────────────── */}
        <section style={{ marginBottom: 96 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {services.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
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
                        gap: 14,
                        marginBottom: 22,
                      }}
                    >
                      <div className="icon-box" style={{ marginBottom: 0 }}>
                        {s.icon}
                      </div>
                      <span className="badge">{s.tag}</span>
                    </div>
                    <h2
                      style={{
                        fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                        marginBottom: 14,
                      }}
                    >
                      {s.title}
                    </h2>
                    <p style={{ maxWidth: 580, marginBottom: 28 }}>{s.desc}</p>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        marginBottom: 32,
                      }}
                    >
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            listStyle: "none",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--accent)",
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: "0.8rem",
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
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-primary">
                      {s.cta}
                    </Link>
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "clamp(3rem, 5vw, 5.5rem)",
                      fontWeight: 700,
                      color: "rgba(0,245,196,0.06)",
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

        {/* ── Process ──────────────────────────────────── */}
        <section style={{ marginBottom: 88 }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>
              How We Work
            </span>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}>
              A process built for clarity.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {process.map((p) => (
              <div key={p.step} className="card-flat">
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    color: "var(--accent)",
                    letterSpacing: "0.16em",
                    marginBottom: 16,
                  }}
                >
                  {p.step}
                </p>
                <h3 style={{ marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: "0.9rem" }}>{p.desc}</p>
              </div>
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
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            <span className="eyebrow" style={{ marginBottom: 14 }}>
              Ready to Start?
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                marginBottom: 14,
              }}
            >
              Tell us what you&apos;re building.
            </h2>
            <p style={{ marginBottom: 32 }}>
              We respond within 24 hours with honest feedback and a clear path
              forward.
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
