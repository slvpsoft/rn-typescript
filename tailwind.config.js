/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './App.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E40AF',
        'white': '#FFFFFF',
        'black': '#000000',
      }
    },
  },
  plugins: [],
}

