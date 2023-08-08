/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white:'#fefbff',
        darkRed:'#d25119',
        green:'#3a4e26'
      },
      fontWeight: {
        bolder: '800',
      },
    },
  },
  plugins: [],
}