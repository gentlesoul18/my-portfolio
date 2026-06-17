import Image from "next/image";

const funFacts = [
  "I mentor women in tech",
  "I love solving complex API puzzles",
  "I taught backend at MSSN FUTA",
  "I built PitchSync from scratch",
  "I enjoy event-driven architecture",
  "I've worked fully remote since 2021",
];

const DotGrid = ({ className = "" }: { className?: string }) => (
  <div className={`absolute pointer-events-none dot-grid ${className}`} />
);

export default function About() {
  return (
    <section id="about-me" className="py-20 max-w-5xl mx-auto px-6">
      <div className="section-heading">
        <h2 style={{ color: "var(--text-color)" }}>
          <span style={{ color: "var(--accent)" }}>#</span>about-me
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            I am an inventive, creative, and enthusiastic backend engineer with
            4 years of utilizing web technologies to design and develop digital
            products for start-ups and businesses.
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            I specialize in building scalable, event-driven backends using
            Node.js, Django, and AWS serverless services. From designing APIs
            to deploying cloud infrastructure, I deliver solutions that are
            performant and cost-efficient.
          </p>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
            Beyond engineering, I&apos;m passionate about mentoring women in tech
            — I spent 5 years as a Tech Tutor at the Muslim Students&apos; Society
            of Nigeria, FUTA Branch, teaching backend development to selected
            candidates.
          </p>
          <a href="#contacts" className="btn-accent">
            Let&apos;s work together →
          </a>
        </div>

        <div className="relative flex items-center justify-center">
          <DotGrid className="top-0 right-4 w-24 h-24 opacity-60" />
          <DotGrid className="bottom-0 left-4 w-16 h-16 opacity-40" />
          <div className="absolute w-28 h-28 top-4 right-0 rotate-3" style={{ border: "1px solid var(--border-color)" }} />
          <div className="absolute w-20 h-20 top-8 right-4 -rotate-3" style={{ border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)" }} />

          <div
            className="relative z-10 w-[240px] h-[300px] overflow-hidden"
            style={{ border: "1px solid var(--border-color)" }}
          >
            <Image
              src="/photo.jpg"
              alt="Muslimah developer at work"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>
      </div>

      <div>
        <div className="section-heading">
          <h2 className="text-base" style={{ color: "var(--text-color)" }}>
            <span style={{ color: "var(--accent)" }}>#</span>my-highlights
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {funFacts.map((fact) => (
            <span
              key={fact}
              className="text-xs px-3 py-1.5 transition-colors cursor-default"
              style={{ border: "1px solid var(--border-color)", color: "var(--muted)" }}
            >
              {fact}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
