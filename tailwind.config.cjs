/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
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
      },
      gridTemplateAreas: {
        'layout-a': [
          'aside main',
          'aside footer'
        ],
        'layout-b': [
          'main main',
          'footer footer'
        ],
      },
    },
    gridTemplateColumns: {
      6: '1fr 5fr',
      1: 'repeat(1, minmax(0, 1fr))'
    },
    gridTemplateRows: {
      2: '87vh 5vh'
    }
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
