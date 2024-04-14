import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        blob: "42% 56% 72% 28% / 42% 42% 56% 48%",
      },
      keyframes: {
        morph: {
          "0% 100%": {
            borderRadius: "42% 56% 72% 28% / 42% 42% 56% 48%",
          },
          "33%": {
            borderRadius: "72% 28% 48% 48% / 28% 28% 72% 72%",
          },
          "66%": {
            borderRadius: "100% 56% 56% 100% / 100% 100% 56% 56%",
          },
        },
      },
      animation: {
        morph: "morph 3.75s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
