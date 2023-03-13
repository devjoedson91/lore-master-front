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
        body: "#e6e6e6",
        accessBtn: "#1e469a"
      },
      boxShadow: {
        default: "0rem 0.4rem 3.2rem rgba(15, 23, 42, 0.15)"
      },
      fontFamily: {
        'inter': 'Inter, sans-serif'
      },
      gridTemplateAreas: {
        'layout': [
          'aside main',
          'aside footer'
        ],
      },
    },
    gridTemplateColumns: {
      6: '1fr 5fr',
    },
    gridTemplateRows: {
      2: '84vh 8vh'
    }
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
