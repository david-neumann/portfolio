/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-wotfard)'],
        mono: ['var(--font-victor)'],
      },
      screens: {
        xs: '480px',
        smd: '896px',
      },
    },
  },
  plugins: [],
};
