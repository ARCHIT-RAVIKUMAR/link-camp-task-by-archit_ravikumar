/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ieeeBlue: '#00629B',
        ieeeDark: '#003B5C',
        ieeeLight: '#F4F6F8',
        textDark: '#1A1A1A',
        white: '#FFFFFF'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
