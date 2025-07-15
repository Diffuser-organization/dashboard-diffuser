import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#BD18E1",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#6B3EFF",
              foreground: "#FFFFFF",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#D345F8",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#8646F4",
              foreground: "#FFFFFF",
            },
          },
        },
        // ... custom themes
      },
    }),
  ],
};

module.exports = config;
