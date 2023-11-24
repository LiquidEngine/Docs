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
        black: {
          100: "#111111",
          300: "#2A2A2A",
          400: "#333333",
        },
      },
    },
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
} satisfies Config;
