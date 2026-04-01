/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#08080f',
          900: '#0e0e1c',
          800: '#1a1a35',
          700: '#2a2660',
        },
        purple: {
          700: '#534AB7',
          600: '#7c72e8',
          500: '#9088f0',
          400: '#c0b8ff',
          300: '#d4c5ff',
        },
        teal: {
          500: '#5dcaa5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
}
