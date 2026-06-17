import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#14141f",
          secondary: "#1e1e2e",
          tertiary: "#252535",
        },
        accent: "#a855f7",
        "border-color": "#2d2d3f",
        muted: "#6b6b8a",
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
