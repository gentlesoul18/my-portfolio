import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-xs mb-4 tracking-widest" style={{ color: "var(--accent)" }}>
          ERROR 404
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          style={{ color: "var(--text-color)" }}
        >
          Page not <span style={{ color: "var(--accent)" }}>found</span>
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--muted)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-accent">
          ← Back home
        </Link>
      </div>
    </main>
  );
}
