import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#9DB2BF",
        input: "#9DB2BF",
        ring: "rbga(0,0,0,0)",
        background: "#DDE6ED",
        foreground: "#27374D",
        primary: {
          DEFAULT: "#27374D",
          foreground: "#DDE6ED",
        },
        secondary: {
          DEFAULT: "#526D82",
          foreground: "#DDE6ED",
        },
        destructive: {
          DEFAULT: "#526D82",
          foreground: "#DDE6ED",
        },
        muted: {
          DEFAULT: "#526D82",
          foreground: "#DDE6ED",
        },
        accent: {
          DEFAULT: "#526D82",
          foreground: "#DDE6ED",
        },
        popover: {
          DEFAULT: "#526D82",
          foreground: "#DDE6ED",
        },
        card: {
          DEFAULT: "#526D82",
          foreground: "#DDE6ED",
        },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
