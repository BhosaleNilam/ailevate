/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7B5CF0',
        secondary: '#1A1A1A',
        dark: '#121212',
        light: '#2D2D3A',
        accent: '#64FFDA',
        purple: {
          100: '#E9E1FC',
          200: '#D3C3F9',
          300: '#BCA5F7',
          400: '#A587F4',
          500: '#7B5CF0',
          600: '#624AD8',
          700: '#4A39C0',
          800: '#342987',
          900: '#1E194E',
        },
        teal: {
          100: '#DDFFF8',
          200: '#B3FFF0',
          300: '#80FFE6',
          400: '#64FFDA',
          500: '#1DE9B6',
          600: '#00BFA5',
          700: '#009688',
          800: '#00796B',
          900: '#004D40',
        },
        gray: {
          custom: '#9CA3AF',
        }
      },
      backgroundColor: {
        'dark-gradient': 'linear-gradient(135deg, #1E194E 0%, #342987 50%, #1E194E 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 