/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#3C4048',
        'medium-gray': '#B2B2B2',
        'light-gray': '#EAEAEA',
      }
    },
  },
  plugins: [],
} 