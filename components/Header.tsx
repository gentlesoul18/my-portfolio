"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "home" },
  { href: "#works", label: "works" },
  { href: "#experience", label: "experience" },
  { href: "#about-me", label: "about-me" },
  { href: "#contacts", label: "contacts" },
];

const LogoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="2" width="7" height="7" stroke="var(--accent)" strokeWidth="1.5" />
    <rect x="11" y="2" width="7" height="7" fill="var(--accent)" />
    <rect x="2" y="11" width="7" height="7" fill="var(--accent)" />
    <rect x="11" y="11" width="7" height="7" stroke="var(--accent)" strokeWidth="1.5" />
  </svg>
);

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(saved);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.className = next;
    localStorage.setItem("theme", next);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
        style={{ background: "color-mix(in srgb, var(--bg-primary) 92%, transparent)", borderBottom: "1px solid var(--border-color)" }}
      >
        <nav className="max-w-5xl mx-auto px-6 h-[56px] flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <LogoIcon />
            <span className="text-sm font-bold tracking-widest" style={{ color: "var(--text-color)" }}>
              Barakat
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors"
                  style={{ color: active === link.label ? "var(--text-color)" : "var(--muted)" }}
                >
                  <span style={{ color: "var(--accent)" }}>#</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="transition-colors p-1.5 border"
              style={{ borderColor: "var(--border-color)", color: "var(--muted)" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Mobile burger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <span className="w-5 h-px block" style={{ background: "var(--text-color)" }} />
              <span className="w-5 h-px block" style={{ background: "var(--text-color)" }} />
              <span className="w-3 h-px block ml-auto" style={{ background: "var(--text-color)" }} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col px-8 pt-6" style={{ background: "var(--bg-secondary)" }}>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <LogoIcon />
              <span className="text-sm font-bold tracking-widest" style={{ color: "var(--text-color)" }}>
                Barakat
              </span>
            </div>
            <button onClick={() => setOpen(false)} style={{ color: "var(--muted)" }} className="text-xl">
              ✕
            </button>
          </div>

          <ul className="flex flex-col gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-3xl font-bold transition-colors"
                  style={{ color: "var(--text-color)" }}
                  onClick={() => setOpen(false)}
                >
                  <span style={{ color: "var(--accent)" }}>#</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto mb-12 flex gap-4">
            <button onClick={toggleTheme} className="btn-outline" style={{ borderColor: "var(--border-color)" }}>
              {theme === "dark" ? "Light mode ☀" : "Dark mode 🌙"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
