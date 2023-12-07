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
        "gradient-radial":
          "radial-gradient(at top left, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: "#6054f7",
          DEFAULT: "#4237C9",
          purple: "#CEAFFA",
          yellow: "#F9DF78",
          green: "#79E0C1",
        },
        bgColor: {
          DEFAULT: "#1E2228",
        },
        typo: {
          body: "#D1D1D1",
          DEFAULT: "#FFFFFF",
        },
        purpleHighlight: "#725AC1",
        dim: "#2C313B",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
