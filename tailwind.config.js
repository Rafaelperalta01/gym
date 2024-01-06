/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode : "class",
  theme: {
    extend: {
      colors: {
        purple: '#4f46e5',
        customGreen: '#2ecc71',
      },
      fontFamily:{
        'tilt-neon': ['Tilt Neon', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'pt-sans': ['PT Sans', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      clipPath: {
        polygon: 'polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0 0)',
      },
    },
  },
  plugins: [],
}

