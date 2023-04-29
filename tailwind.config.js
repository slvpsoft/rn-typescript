/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './App.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1D401A',
        'secondary': '#6AE65C',
        'tertiary': '#3B8033',
        'white': '#F4F4F4',
        'black': '#000000',
        'light': '#FFFFFF',
      }
    },
  },
  plugins: [],
}

