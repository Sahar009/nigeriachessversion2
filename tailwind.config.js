/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'dark-gray': '#3C4048',
        'medium-gray': '#B2B2B2',
        'light-gray': '#EAEAEA',
      },
      keyframes: {
        colorChangeKing: {
          '0%': { color: '#ffffff' },
          '20%': { color: '#ffcc00' },
          '40%': { color: '#ff6b6b' },
          '60%': { color: '#4ecdc4' },
          '80%': { color: '#a78bfa' },
          '100%': { color: '#ffffff' },
        },
        colorChangeQueen: {
          '0%': { color: '#ffffff' },
          '20%': { color: '#a78bfa' },
          '40%': { color: '#4ecdc4' },
          '60%': { color: '#ff6b6b' },
          '80%': { color: '#ffcc00' },
          '100%': { color: '#ffffff' },
        },
      },
      animation: {
        'color-change-king': 'colorChangeKing 8s infinite',
        'color-change-queen': 'colorChangeQueen 8s infinite',
      },
    },
  },
  plugins: [],
} 