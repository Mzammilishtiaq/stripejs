/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      grey:{
        50:"#F2F0F1"
      }
      },screens: {
        xs: { min: "200px", max: "349px" },
        sm: { min: "350px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        md: { min: "768px", max: "1100px" },
        lg: { min: "1101px", max: "1439px" },
        xl: "1440px",
      },
    },
  },
  plugins: [],
}