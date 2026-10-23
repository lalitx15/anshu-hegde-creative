import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#FBE38E",
          DEFAULT: "#F0CB5E",
          dark: "#D9A93A",
          glass: "rgba(255, 236, 160, 0.55)",
          border: "rgba(255, 255, 255, 0.45)",
          accent: "#E5B83E",
        },
        emerald: {
          light: "#14573F",
          DEFAULT: "#0B3B2C",
          dark: "#072A1F",
        },
        marble: {
          cream: "#EADFC8",
          DEFAULT: "#EADFC8",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          muted: "rgba(26, 26, 26, 0.62)",
        },
        cream: {
          DEFAULT: "#F6EFD9",
          muted: "rgba(246, 239, 217, 0.65)",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        "gold-card": "0 8px 30px rgba(120, 90, 10, 0.15)",
        "gold-glow": "0 0 25px rgba(240, 203, 94, 0.4)",
        "emerald-glow": "0 10px 40px rgba(7, 42, 31, 0.5)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FBE38E 0%, #F0CB5E 50%, #D9A93A 100%)",
        "gold-btn": "linear-gradient(135deg, #F7D56B 0%, #E5B83E 100%)",
        "emerald-gradient": "linear-gradient(180deg, #0B3B2C 0%, #072A1F 100%)",
      },
      borderRadius: {
        "20": "20px",
        "24": "24px",
        "28": "28px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
