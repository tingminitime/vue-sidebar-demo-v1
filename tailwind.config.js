/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deepblue: '#11101d',
        darkblue: '#1d1b31',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
  darkMode: 'class',
}
