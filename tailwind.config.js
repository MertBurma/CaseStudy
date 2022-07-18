/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],

  theme: {
    extend: {
      backgroundColor: theme => ({
        'brand-color': '#777777'
      })
    },
  },
  plugins: [],
}
