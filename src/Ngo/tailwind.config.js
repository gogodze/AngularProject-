/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        yellow: {
          400: '#FDB913',
          500: '#FDB913',
          600: '#E5A510',
        },
      },
    },
  },
  plugins: [],
}
