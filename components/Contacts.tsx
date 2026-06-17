"use client";

import { useState } from "react";

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

type Status = "idle" | "sending" | "sent" | "error";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", title: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formspreeId) {
      const mailto = `mailto:oyebamijibarakat7@gmail.com?subject=${encodeURIComponent(
        form.title || "Portfolio Contact"
      )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.open(mailto, "_blank");
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.title || "Portfolio Contact",
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("sent");
      setForm({ name: "", email: "", title: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const buttonLabel =
    status === "sending" ? "Sending…" :
    status === "sent" ? "Sent ✓" :
    status === "error" ? "Failed — try email" :
    "Send →";

  const inputStyle = {
    background: "transparent",
    border: "1px solid var(--border-color)",
    color: "var(--text-color)",
  };

  return (
    <section id="contacts" className="py-20 max-w-5xl mx-auto px-6">
      <div className="section-heading">
        <h2 style={{ color: "var(--text-color)" }}>
          <span style={{ color: "var(--accent)" }}>#</span>contacts
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Left */}
        <div>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
            I&apos;m open to backend engineering roles and freelance
            opportunities. If you have a project in mind or just want to say
            hello, don&apos;t hesitate to reach out.
          </p>

          <div className="card p-5 max-w-xs">
            <p className="text-xs mb-4" style={{ color: "var(--muted)" }}>Message me here</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:oyebamijibarakat7@gmail.com"
                className="flex items-center gap-3 text-xs transition-colors"
                style={{ color: "var(--text-color)" }}
              >
                <span style={{ color: "var(--muted)" }}><EmailIcon /></span>
                oyebamijibarakat7@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/barakat-oyebamiji-0973001b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs transition-colors"
                style={{ color: "var(--text-color)" }}
              >
                <span style={{ color: "var(--muted)" }}><LinkedinIcon /></span>
                linkedin.com/in/barakat-oyebamiji
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="px-3 py-2 text-xs placeholder-[var(--muted)] focus:outline-none transition-colors"
              style={{ ...inputStyle, "--tw-placeholder-opacity": "1" } as React.CSSProperties}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="px-3 py-2 text-xs focus:outline-none transition-colors"
              style={inputStyle}
            />
          </div>
          <input
            type="text"
            placeholder="Title / Subject"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="px-3 py-2 text-xs focus:outline-none transition-colors"
            style={inputStyle}
          />
          <textarea
            placeholder="Message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="px-3 py-2 text-xs focus:outline-none transition-colors resize-none"
            style={inputStyle}
          />
          <button type="submit" className="btn-accent self-start" disabled={status === "sending"}>
            {buttonLabel}
          </button>
        </form>
      </div>

      {/* All media */}
      <div>
        <div className="section-heading">
          <h2 className="text-base" style={{ color: "var(--text-color)" }}>
            <span style={{ color: "var(--accent)" }}>#</span>all-media
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 text-xs" style={{ color: "var(--muted)" }}>
          <a
            href="https://github.com/gentlesoul18"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--muted)" }}
          >
            @gentlesoul18 (GitHub)
          </a>
          <a
            href="https://www.linkedin.com/in/barakat-oyebamiji-0973001b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: "var(--muted)" }}
          >
            @barakat-oyebamiji (LinkedIn)
          </a>
          <a
            href="mailto:oyebamijibarakat7@gmail.com"
            className="transition-colors"
            style={{ color: "var(--muted)" }}
          >
            oyebamijibarakat7@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
