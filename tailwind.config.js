/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#C0DFFF',
          300: '#90C7FF',
          400: '#60AFFF',
          500: '#4E9AF7',
          600: '#3B82F6',
          700: '#2563EB',
          800: '#1D4ED8',
        },
        green: {
          500: '#56D78C',
        },
        orange: {
          500: '#FF9F43',
        },
        yellow: {
          300: '#FFD53D',
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
};