/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6EE7B7',
          dark: '#059669'
        },
        secondary: {
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8'
        },
        dark: {
          DEFAULT: '#0A0A0A',
          card: '#111111',
          lighter: '#1A1A1A'
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
};