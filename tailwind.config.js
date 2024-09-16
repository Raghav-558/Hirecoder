/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'green': '#14A800',
        'grey': '#111111',
        'lightgrey': '#131313',
      },
      fontSize: {
        'sm': '10px',
        'md': '12px',
        'lg': '14px',
        'xl': '16px',
        '2xl': '18px',
        '3xl': '20px',
        '4xl': '24px',
        '5xl': '48px',
      },
    },
  },
  plugins: [],
}

