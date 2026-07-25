import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#22C55E",
          dim: "#1A9E4B",
          soft: "rgba(34, 197, 94, 0.12)",
        },
        ink: {
          DEFAULT: "#050505",
          raised: "#0B0C0B",
          card: "#101210",
          border: "rgba(255,255,255,0.08)",
        },
        paper: {
          DEFAULT: "#F5F6F4",
          dim: "rgba(245,246,244,0.64)",
          faint: "rgba(245,246,244,0.4)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-jakarta)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        content: "1280px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
