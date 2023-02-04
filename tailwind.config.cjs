/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#ED3AB5",
        accent: "#8F1E84",
      },

      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
