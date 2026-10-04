/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A1020",
        graphite: "#EAF2FF",
        mint: "#FFB224", // Legacy token maps to amber; no green rendered.
        amber: "#FFB224",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
