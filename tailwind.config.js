/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#0E1947',
        primaryItem: '#353D62',
        header: '#262D4F'
      },
      colors: {
        primaryOpacity: '#939AB0'
      }
    },
  },
  plugins: [],
}
