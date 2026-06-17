import Image from "next/image";

const DotGrid = ({ className = "" }: { className?: string }) => (
  <div className={`absolute pointer-events-none dot-grid ${className}`} />
);

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-14">
      <div className="max-w-5xl mx-auto px-6 w-full py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="animate-fade-in">
          <h1
            className="text-4xl md:text-5xl font-bold leading-[1.15] mb-6 tracking-tight"
            style={{ color: "var(--text-color)" }}
          >
            Barakat is a{" "}
            <span style={{ color: "var(--accent)" }}>backend</span>
            <br />
            &amp; <span style={{ color: "var(--accent)" }}>software</span>{" "}
            engineer
          </h1>

          <p className="text-sm leading-relaxed mb-10 max-w-sm" style={{ color: "var(--muted)" }}>
            An inventive, creative backend engineer with 4 years of building
            scalable APIs and cloud solutions for start-ups and businesses.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a href="#works" className="btn-accent">View my work →</a>
            <a href="#contacts" className="btn-outline">Contact me →</a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Resume ↓
            </a>
          </div>

          {/* Currently working on badge */}
          <div
            className="inline-flex items-center gap-3 px-4 py-3"
            style={{ border: "1px solid var(--border-color)" }}
          >
            <span className="w-2 h-2 flex-shrink-0 animate-pulse" style={{ background: "var(--accent)" }} />
            <span className="text-xs" style={{ color: "var(--muted)" }}>
              Currently working on{" "}
              <a
                href="https://pitchsync.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--accent)" }}
              >
                PitchSync
              </a>
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex items-center justify-center">
          <DotGrid className="top-0 right-0 w-28 h-28 opacity-70" />
          <DotGrid className="bottom-4 right-8 w-16 h-16 opacity-50" />
          <div
            className="absolute w-32 h-32 bottom-6 -left-2 rotate-3 z-0"
            style={{ border: "1px solid var(--border-color)" }}
          />
          <div
            className="absolute w-24 h-24 bottom-10 left-4 -rotate-2 z-0"
            style={{ border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)" }}
          />
          <div
            className="absolute w-12 h-12 top-8 left-8 rotate-6 z-0"
            style={{ border: "1px solid var(--border-color)" }}
          />

          <div
            className="relative z-10 w-[260px] h-[340px] overflow-hidden"
            style={{ border: "1px solid var(--border-color)" }}
          >
            <Image
              src="/photo.jpg"
              alt="Muslimah in tech — Backend Engineer"
              fill
              className="object-cover object-top"
              unoptimized
              priority
            />
            <div className="absolute inset-0" style={{ background: "color-mix(in srgb, var(--accent) 5%, transparent)", mixBlendMode: "multiply" }} />
          </div>

          <DotGrid className="bottom-0 left-0 w-10 h-10 opacity-40" />
        </div>
      </div>
    </section>
  );
}
