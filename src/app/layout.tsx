"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const footerServices = [
  { href: "/services#web", label: "Web Development" },
  { href: "/services#apps", label: "App Builds" },
  { href: "/services#ai", label: "AI Integration" },
  { href: "/services#consult", label: "Consulting" },
  { href: "/services#collab", label: "Collabs" },
];

const footerLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-wrap">
          <Link href="/" className="brand-mark" aria-label="IMDEV Home">
            <span className="brand-dot" />
            <span>IMDEV</span>
          </Link>

          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.38,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={link.href}
                  className={`nav-link${pathname === link.href ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-wrap">
          <div>
            <p className="footer-brand">IMDEV</p>
            <p className="footer-text">
              Clean product development, modern web systems, and AI-enhanced
              digital experiences built with precision and purpose.
            </p>
          </div>

          <div>
            <p className="footer-col-label">Services</p>
            <nav className="footer-nav">
              {footerServices.map((s) => (
                <Link key={s.href} href={s.href} className="footer-link">
                  {s.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="footer-col-label">Company</p>
            <nav className="footer-nav">
              {footerLinks.map((l) => (
                <Link key={l.href} href={l.href} className="footer-link">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} IMDEV. All rights reserved.
          </p>
          <p className="footer-copy">Next.js · Tailwind v4 · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>IMDEV | Web Development & AI Integration</title>
        <meta
          name="description"
          content="IMDEV builds polished web products, modern front-end systems, app builds, and AI-enhanced digital experiences with real product thinking."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="site-shell">
          <div className="site-bg" />
          <Header />
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
          <Footer />
        </div>
      </body>
    </html>
  );
}
