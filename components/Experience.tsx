const experiences = [
  {
    role: "Back End Engineer (Node.js & Django)",
    company: "Schull Technologies",
    period: "Feb 2025 — Present",
    location: "Lagos, Nigeria (Remote)",
    bullets: [
      "Developed and deployed serverless backend endpoints for web and mobile apps using AWS (API Gateway, Lambda, DynamoDB, S3).",
      "Designed scalable, event-driven architectures and implemented core business logic in AWS Lambda.",
      "Managed secure data flow and storage with DynamoDB and S3 — performant, scalable, cost-efficient.",
      "Integrated APIs with frontend teams for seamless user experience across platforms.",
    ],
  },
  {
    role: "Back End Engineer (Node.js)",
    company: "PitchSync",
    period: "Oct 2023 — Present",
    location: "Akure, Nigeria (Remote)",
    bullets: [
      "Building the entire backend from scratch for a startup pitch platform.",
      "Researching, learning, and collaborating with experienced teammates on tooling and architecture.",
    ],
  },
  {
    role: "Junior Back End Engineer (Node.js)",
    company: "Varens SoftTech",
    period: "Dec 2023 — May 2025",
    location: "Lagos, Nigeria (Hybrid)",
    bullets: [
      "Collaborated to develop and launch PicknFix, MyMTN PicknFix, and Airtel PicknFix — building and optimizing backend endpoints for seamless platform functionality.",
      "Built FoodBay from scratch and led the backend team, delivering a scalable, efficient system tailored to client needs.",
      "Gained extensive experience in backend development, teamwork, and delivering high-quality projects within tight deadlines.",
    ],
  },
  {
    role: "Junior Back End Engineer (Django)",
    company: "Darlaston Smith Ltd",
    period: "Apr 2022 — Sep 2022",
    location: "Birmingham, UK (Remote)",
    bullets: [
      "Developed the back-end architecture for a SaaS e-commerce product.",
      "Designed and built the Darlaston company API from scratch.",
      "Implemented features on Bearmore to let users browse and purchase automobiles and spare parts seamlessly.",
    ],
  },
  {
    role: "Back End Intern",
    company: "HNG x Zuri Internship",
    period: "Jan 2021 — Oct 2021",
    location: "Lagos, Nigeria (Remote)",
    bullets: [
      "Worked on several mini projects and a team-built price-comparison web app with 26 collaborators.",
      "Implemented authentication for the project.",
    ],
  },
];

const volunteering = {
  role: "Tech Tutor & Mentor (Backend)",
  company: "Muslim Students' Society of Nigeria, FUTA Branch",
  period: "Dec 2019 — Nov 2024",
  location: "Ondo, Nigeria",
  bullets: [
    "Spread the gospel of tech to ladies in the society.",
    "Taught selected candidates the fundamentals of backend development.",
  ],
};

const Card = ({ item, accent = false }: { item: (typeof experiences)[0]; accent?: boolean }) => (
  <article className="card p-5">
    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
      <div>
        <h3 className="text-sm font-bold" style={{ color: "var(--text-color)" }}>
          {item.role}
        </h3>
        <p className="text-xs" style={{ color: accent ? "var(--accent)" : "var(--muted)" }}>
          {item.company}
        </p>
      </div>
      <div className="text-[10px] md:text-right" style={{ color: "var(--muted)" }}>
        <p>{item.period}</p>
        <p>{item.location}</p>
      </div>
    </div>
    <ul className="space-y-1.5 list-disc pl-5">
      {item.bullets.map((b) => (
        <li key={b} className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
          {b}
        </li>
      ))}
    </ul>
  </article>
);

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-5xl mx-auto px-6">
      <div className="section-heading">
        <h2 style={{ color: "var(--text-color)" }}>
          <span style={{ color: "var(--accent)" }}>#</span>experience
        </h2>
      </div>

      <div className="flex flex-col gap-4 mb-12">
        {experiences.map((exp) => (
          <Card key={`${exp.company}-${exp.period}`} item={exp} accent />
        ))}
      </div>

      <div className="section-heading">
        <h2 className="text-base" style={{ color: "var(--text-color)" }}>
          <span style={{ color: "var(--accent)" }}>#</span>volunteering
        </h2>
      </div>
      <Card item={volunteering} />
    </section>
  );
}
