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
        dark: '#0A1128',
        light: '#1D2B53',
        'mint-dark': '#3AD6A2',
        'mint-light': '#7FFFD4',
        'gray-custom': '#808080',
        navy: {
          100: '#E6ECF2',
          200: '#C7D6E6',
          300: '#A3BFD9',
          400: '#7FA8CC',
          500: '#4C83B6',
          600: '#2E5C8A',
          700: '#1D3F66',
          800: '#0F2A4A',
          900: '#0A1128',
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
      },
      backgroundColor: {
        'dark-gradient': 'linear-gradient(135deg, #0A1128 0%, #1D3F66 50%, #0A1128 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin 6s linear infinite',
        'text-shimmer': 'text-shimmer 2.5s ease-out infinite alternate',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
    },
  },
  plugins: [],
} 