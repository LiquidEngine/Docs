import type { Config } from "tailwindcss";

export default {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ee5a24",
        black: "#111111",
        covert: {
          100: "#111111",
          300: "#202023",
          400: "#1b1b1d",
        },
      },
      screens: {
        "ds-mobile-cutoff": "996px",
        "2xl": "1440px",
        "3xl": "1560px",
      },
    },
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
} satisfies Config;
