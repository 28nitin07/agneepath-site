/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agni: {
          yellow: "#FACC15",
          orange: "#F97316",
          ember: "#EA580C",
          dark: "#070707ff",
        },
      },
    },
  },
  plugins: [],
};
