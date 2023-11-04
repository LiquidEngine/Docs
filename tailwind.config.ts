import type { Config } from "tailwindcss";

export default {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
} satisfies Config;
