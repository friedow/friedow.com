/** @type {import('tailwindcss').Config} */ 

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./**/.vitepress/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Work Sans"', 'sans-serif'],
      'raleway': ['Raleway', ...defaultTheme.fontFamily.sans],
      'lato': ['Lato', ...defaultTheme.fontFamily.sans],
      'mono': ['"Source Code Pro"', 'monospace']
    },
    colors: {
      'lightblue': '#ECEDF1',
      'blue': '#3E72B6',
      'darkblue': '#262A48',
      'orange': '#ECAD4C',
      'green': '#36C088',
      'gray': '#575757',
      'lightgray': '#808080',
      'darkgray': '#262A48',
      'white': '#FFFFFF',
      'black': '#000000',
      'transparent': 'transparent',
    },
    extend: {
      backgroundSize: {
        '50%': '50%',
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}
