/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green:'#BCE709',
        darkGreen:'#404F43'
      },
      fontWeight: {
        bolder: '800',
      },
    },
  },
  plugins: [],
}