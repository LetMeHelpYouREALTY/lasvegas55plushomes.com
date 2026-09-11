import type { Config } from "tailwindcss";

/**
 * Luxury realtor palette — forest green + gold foil on crisp white.
 * Matches the Sun City Summerlin 55+ brand direction.
 */
const config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0B3D2E",
          deep: "#06281F",
          mid: "#145C43",
          soft: "#E8F2EC",
          muted: "#1A5C45",
        },
        gold: {
          DEFAULT: "#E5B93C",
          bright: "#F0C84A",
          dark: "#C9A227",
          soft: "#FBF3DC",
          ink: "#1A1508",
        },
        brand: {
          primary: "#0B3D2E",
          accent: "#E5B93C",
          surface: "#FFFFFF",
          ink: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 18px 40px -20px rgba(11, 61, 46, 0.45)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
