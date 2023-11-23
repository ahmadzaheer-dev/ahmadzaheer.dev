import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(at 80%, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: "#6054f7",
          DEFAULT: "#4237C9",
        },
        bgColor: {
          DEFAULT: "#10172A",
        },
        typo: {
          body: "#DBE9FE",
          DEFAULT: "#DBE9FE",
        },
        purpleHighlight: "#725AC1",
        dim: "#263049",
      },
    },
  },
  plugins: [],
};
export default config;
