import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://barakat-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Barakat Oyebamiji — Backend & Software Engineer",
    template: "%s | Barakat Oyebamiji",
  },
  description:
    "Backend engineer with 4 years of experience building scalable APIs, event-driven architectures, and AWS serverless cloud solutions for start-ups and businesses.",
  keywords: [
    "Backend Engineer",
    "Software Engineer",
    "Node.js",
    "Django",
    "Python",
    "AWS",
    "API",
    "Serverless",
    "Barakat Oyebamiji",
  ],
  authors: [{ name: "Barakat Oyebamiji", url: siteUrl }],
  creator: "Barakat Oyebamiji",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Barakat Oyebamiji — Backend & Software Engineer",
    description:
      "4 years building scalable APIs and cloud solutions for start-ups and businesses.",
    siteName: "Barakat Oyebamiji",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barakat Oyebamiji — Backend & Software Engineer",
    description:
      "4 years building scalable APIs and cloud solutions for start-ups and businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#14141f" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.className=t;})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
