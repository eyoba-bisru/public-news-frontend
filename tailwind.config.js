/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#4C230A",
      secondar: "#A53F2B",
      background: "#CCC9A1",
      text: "#280004",
      adminNav: "#F0FFCE",
      slate: "#D9D9D9",
    },
    extend: {},
  },
  plugins: [],
};
