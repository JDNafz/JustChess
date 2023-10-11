/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      //custom css starts here
      varColors: {
        var1: "rgb"
      }
    },
  },
  plugins: [],
}

