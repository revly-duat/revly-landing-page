import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
      fontFamily: {
        heading: ['"Krona One"', "sans-serif"],
        body: ['"Figtree"', "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#212121",
        secondary: "#212121",
        cta: "#FFA000",
        "cta-hover": "#FFC107",
        "secondary-hover": "#424242",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
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
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-move": {
          "0%": { backgroundPosition: "200% 10%" },
          "100%": { backgroundPosition: "0% 10%" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(255, 160, 0, 0.8)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 160, 0, 1)" },
        },
        "text-slide": {
          "0%, 20%": {
            transform: "translateY(0%)",
          },
          "25%, 45%": {
            transform: "translateY(-20%)",
          },
          "50%, 70%": {
            transform: "translateY(-40%)",
          },
          "75%, 95%": {
            transform: "translateY(-60%)",
          },
          "100%": {
            transform: "translateY(-80%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "gradient-move": "gradient-move 5s linear infinite",
        glow: "glow 2s infinite",
        "text-slide": "text-slide 10s cubic-bezier(0.83, 0, 0.17, 1) infinite", // Anpassa tiden till dina behov
      },
      backgroundImage: {
        heroGradient: "linear-gradient(90deg, #001D3D, #003566, #001D3D)",
        marketingGradient: "linear-gradient(90deg, #FF7043, #FFB74D, #FF7043)",
        rmsGradient: "linear-gradient(90deg, #1a2274ff, #2837baff, #242d91ff)",
        academyGradient: "linear-gradient(90deg, #FFA000, #FF7043, #FFA000)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
