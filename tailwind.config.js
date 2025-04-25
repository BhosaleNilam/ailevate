/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CFEC1',
        secondary: '#1A1A1A',
        dark: '#000000',
        light: '#2A2A2A',
        'mint-dark': '#3AD6A2',
        'mint-light': '#7FFFD4',
        'gray-custom': '#808080',
      },
      backgroundColor: {
        'dark-gradient': 'linear-gradient(180deg, #1A1A1A 0%, #000000 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 