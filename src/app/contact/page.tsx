"use client";

import { useState } from "react";

const serviceOptions = [
  "Web Development",
  "App Build",
  "AI Integration",
  "Consulting",
  "Collaboration",
  "Other",
];

export default function ContactPage() {
  const [service, setService]   = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="page-shell">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 560, margin: "80px auto", textAlign: "center" }}>
            <div className="icon-box" style={{ margin: "0 auto 24px", width: 56, height: 56, fontSize: "1.5rem" }}>✓</div>
            <h2 style={{ marginBottom: 14 }}>Message received.</h2>
            <p style={{ marginBottom: 32 }}>
              Thanks for reaching out. We&apos;ll get back to you within 24 hours
              with a clear path forward.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-secondary"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <div className="orb" style={{ width: 200, height: 200, left: "4%", top: 80, background: "rgba(0,245,196,0.07)" }} />
      <div className="orb" style={{ width: 160, height: 160, right: "6%", top: 200, background: "rgba(167,139,250,0.05)", animationDelay: "3s" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Header ───────────────────────────────────── */}
        <section style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
          <span className="eyebrow fade-up" style={{ marginBottom: 16 }}>Contact</span>
          <h1 className="fade-up-1" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", marginBottom: 18 }}>
            Let&apos;s start a conversation.
          </h1>
          <p className="fade-up-2">
            Tell us what you&apos;re working on. We respond within 24 hours with
            honest feedback and a clear next step.
          </p>
        </section>

        {/* ── Form + Info ──────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 32, maxWidth: 1000, margin: "0 auto", alignItems: "start" }}>

          {/* Form */}
          <div className="panel" style={{ padding: "44px" }}>
            <div className="panel-glow" />
            <form onSubmit={handleSubmit} style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 24 }}>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <label className="input-label">Name</label>
                  <input
                    className="input"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="input-label">Email</label>
                  <input
                    className="input"
                    type="email"
                    placeholder="you@company.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="input-label">Service Needed</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {serviceOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setService(opt)}
                      style={{
                        padding: "7px 16px",
                        borderRadius: 999,
                        border: "1px solid",
                        borderColor: service === opt ? "var(--border-accent)" : "var(--border)",
                        background:  service === opt ? "var(--accent-dim)" : "var(--bg-surface)",
                        color:       service === opt ? "var(--accent)" : "var(--text-muted)",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.68rem",
                        letterSpacing: "0.06em",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="input-label">Message</label>
                <textarea
                  className="input"
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                  style={{ resize: "vertical" }}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                Send Message →
              </button>

            </form>
          </div>

          {/* Info sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="card-flat">
              <span className="eyebrow" style={{ marginBottom: 12 }}>Response time</span>
              <div className="stat-num" style={{ fontSize: "2rem", marginBottom: 6 }}>24h</div>
              <p style={{ fontSize: "0.85rem" }}>We get back to every message within one business day, always.</p>
            </div>

            <div className="card-flat">
              <span className="eyebrow" style={{ marginBottom: 14 }}>What happens next</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { n: "01", t: "We review your message" },
                  { n: "02", t: "We reply with questions or a proposal" },
                  { n: "03", t: "We align on scope and timeline" },
                  { n: "04", t: "We get to work" },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.66rem", color: "var(--accent)", minWidth: 20 }}>{step.n}</span>
                    <span style={{ fontSize: "0.88rem", color: "var(--text-soft)" }}>{step.t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-flat">
              <span className="eyebrow" style={{ marginBottom: 12 }}>Or reach out directly</span>
              <p style={{ fontSize: "0.85rem", marginBottom: 12 }}>
                Prefer a direct line? Find us on LinkedIn or drop an email.
              </p>
              <a
                href="mailto:hello@imdev.studio"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.74rem",
                  color: "var(--accent)",
                  letterSpacing: "0.06em",
                }}
              >
                hello@imdev.studio →
              </a>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}