/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#121212", //overall website background color
        secondary: "#ADD8E6", //overall website text color
        tertiary: "#252424", //overall text field background color
        "black-100": "#464444",  //contact card background color
        "black-200": "#090325", //testimonials card color
        "white-100": "#f3f3f3", //work experience text color
      },
      boxShadow: {
        card: "0px 35px 120px -15px #143AA2", //card shadow
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};