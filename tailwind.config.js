/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a1f75',
        secondary: '#54a0ff',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        assistant: ['Assistant', 'sans-serif']
      },
    },
  },
  plugins: [],
};