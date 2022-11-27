/** @type {import('tailwindcss').Config} */ 

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./**/.vitepress/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Raleway', ...defaultTheme.fontFamily.sans],
      'mono': ['"Source Code Pro"', 'monospace']
    },
    colors: {
      'orange': '#ECAD4C',
      'gray': '#808080',
      'darkgray': '#262A48',
      'white': '#FFFFFF',
    },
    extend: {
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}
