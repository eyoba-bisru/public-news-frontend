/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4C230A",
        secondary: "#A53F2B",
        background: "#CCC9A1",
        text: "#280004",
        adminNav: "#F0FFCE",
        slate: "#D9D9D9",
        userNav: "#BCB993",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
