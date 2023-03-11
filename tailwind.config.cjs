/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        body: "#e6e6e6"
      },
      boxShadow: {
        default: "0rem 0.4rem 3.2rem rgba(15, 23, 42, 0.15)"
      },
      fontFamily: {
        'inter': 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
