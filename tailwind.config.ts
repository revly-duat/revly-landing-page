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
      fontFamily: {
        almarose: ["Almarose", "sans-serif"],
      },
      fontWeight: {
        almaroseThin: "100",
        almaroseLight: "300",
        almaroseRegular: "400",
        almaroseMedium: "500",
        almaroseSemiBold: "600",
        almaroseBold: "700",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "gradient-move": "gradient-move 5s linear infinite",
        glow: "glow 2s infinite",
      },
      backgroundImage: {
        heroGradient:
          "linear-gradient(90deg, #FFA000,rgb(255, 203, 48), #FFA000)",
        marketingGradient: "linear-gradient(90deg, #FF7043, #FFB74D, #FF7043)",
        rmsGradient: "linear-gradient(90deg, #FFA000, #FF6F91, #FFA000)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
