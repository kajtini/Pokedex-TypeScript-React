/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B2D42",
        secondary: "#92DCE5",
        accent: "#F8F7F9",
      },

      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
