const skillCategories = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "GraphQL", "HTML"],
  },
  {
    label: "Frameworks",
    items: ["Django", "Django REST", "FastAPI", "Flask", "Node.js", "NestJS", "Express", "Fastify"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "NoSQL"],
  },
  {
    label: "Tools",
    items: ["Git", "VSCode", "Postman", "Swagger", "Hasura", "Bash", "NPM"],
  },
  {
    label: "Cloud / AWS",
    items: ["Lambda", "S3", "API Gateway", "DynamoDB", "Heroku", "Render"],
  },
  {
    label: "Other",
    items: ["REST API", "Serverless", "Event-driven arch"],
  },
];

const GeomDecoration = () => (
  <div className="hidden md:block relative w-40 h-40 flex-shrink-0 self-center mr-8">
    <div className="absolute inset-0 rotate-6" style={{ border: "1px solid var(--border-color)" }} />
    <div className="absolute inset-4 -rotate-6" style={{ border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)" }} />
    <div className="absolute inset-8 rotate-3" style={{ border: "1px solid var(--border-color)" }} />
    <div className="absolute -top-6 -left-6 w-16 h-16 dot-grid opacity-50" />
    <div className="absolute -bottom-6 -right-6 w-12 h-12 dot-grid opacity-40" />
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto px-6">
      <div className="section-heading">
        <h2 style={{ color: "var(--text-color)" }}>
          <span style={{ color: "var(--accent)" }}>#</span>skills
        </h2>
      </div>

      <div className="flex items-start gap-0 md:gap-8">
        <GeomDecoration />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="card p-4">
              <h3 className="text-xs font-bold mb-2 tracking-wide" style={{ color: "var(--accent)" }}>
                {cat.label}
              </h3>
              <ul className="space-y-1">
                {cat.items.map((item) => (
                  <li key={item} className="text-xs" style={{ color: "var(--muted)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
