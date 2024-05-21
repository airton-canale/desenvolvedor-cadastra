import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cadastra-orange': '#FB953E',
        'cadastra-gray': '#C7C7C7',
        'cadastra-gray-dark': '#808080'
      },
      screens: {
        'xs': '430px',
      },
    },
  },
  plugins: [],
};
export default config;
