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
        "blur-gradient": "url(assets/bg-mobile.svg)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background": "#111026",
        primary: "#6850BF",
        "primary-light": "#9266F2",
        secondary: "#0E1A59",
        "secondary-light": "#52C5F2",
      },
      fontFamily: {
        "ultralife": "Ultralife sans"
      },
    },
  },
  plugins: [],
};
export default config;
