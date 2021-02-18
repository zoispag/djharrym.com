const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['maven-pro', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
