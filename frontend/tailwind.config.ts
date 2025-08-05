import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          500: '#3B82F6',
          600: '#2563EB',
        },
        dark: {
          600: '#374151',
          700: '#1F2937',
          800: '#111827',
          900: '#0F172A',
        },
      },
    },
  },
  plugins: [],
};
export default config;
