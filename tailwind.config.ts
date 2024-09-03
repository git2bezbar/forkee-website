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
        'primary': "#6624FF",
        'primaryDark': "#4116A7",
        'white': "#FFFFFF",
        'whiteDark': "#E3E3E3",
        'secondary': "#01092E",
        'black': "#131313",
        'subtitle': '#8391A5',
        'gray': "#D9D9D9",
        'hoveredSidebarItems': '#212121',
      },
      boxShadow: {
        'outline': '2px 2px 0 0 #000',
      },
    }
  },
  plugins: [],
};
export default config;
