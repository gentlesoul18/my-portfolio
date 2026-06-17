const projects = [
  {
    name: "PitchSync",
    description: "Startup pitch platform — built and leading the entire backend from scratch.",
    tech: ["Node.js", "PostgreSQL", "AWS"],
    live: "https://pitchsync.vercel.app",
    docs: "https://documenter.getpostman.com/view/22310286/2s9YJaY4GR",
    accent: "#a855f7",
  },
  {
    name: "FoodBay",
    description: "Led the backend team; built a scalable food delivery system from scratch.",
    tech: ["Node.js", "Express", "MongoDB"],
    live: null,
    docs: null,
    accent: "#f97316",
  },
  {
    name: "PicknFix",
    description: "Multi-platform repair marketplace — backend powering MyMTN & Airtel variants.",
    tech: ["Node.js", "Fastify", "MongoDB"],
    live: "https://picknfix.com",
    docs: null,
    accent: "#16a34a",
  },
  {
    name: "Dalatek",
    description: "Full-stack platform built with scalable backend infrastructure and REST APIs.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    live: "https://dalatek.net/",
    docs: null,
    accent: "#4f46e5",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <article className="card flex flex-col">
    <div
      className="h-32 flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--bg-tertiary)", borderBottom: "1px solid var(--border-color)" }}
    >
      <span className="text-2xl font-bold tracking-tight z-10" style={{ color: project.accent }}>
        {project.name}
      </span>
      <div className="absolute inset-0 dot-grid opacity-20" />
    </div>

    <div className="flex flex-col flex-1 p-4">
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.map((t) => (
          <span key={t} className="text-[10px]" style={{ color: "var(--muted)" }}>
            {t}
          </span>
        ))}
      </div>
      <h3 className="font-bold text-sm mb-1" style={{ color: "var(--text-color)" }}>
        {project.name}
      </h3>
      <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: "var(--muted)" }}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Live ⇔
          </a>
        )}
        {project.docs && (
          <a href={project.docs} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Docs ▶
          </a>
        )}
      </div>
    </div>
  </article>
);

export default function Projects() {
  return (
    <section id="works" className="py-20 max-w-5xl mx-auto px-6">
      <div className="section-heading">
        <h2 style={{ color: "var(--text-color)" }}>
          <span style={{ color: "var(--accent)" }}>#</span>works
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
