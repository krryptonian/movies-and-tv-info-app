const theme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '3.5rem',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...theme.fontFamily.sans],
        serif: ['Roboto Slab', ...theme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
