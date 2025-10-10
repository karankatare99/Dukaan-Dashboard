/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-960': '#4D4D4D',
        'blue-960': '#146EB4'
      }
    },
  },
  plugins: [],
}