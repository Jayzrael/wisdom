/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'curve': '44% 46% 10% 10% / 6% 5% 0% 0% ',
        'curve-2': '45% 55% 12% 88% / 46% 22% 78% 54%',
        'curve-t': '0 0 50% 50% / 0 0 .75em .75em',
        'curve-t2': '50% / 0.75em',
        'curve-b': '10% 10% 55% 49% / 0% 0% 30% 33% '
      }
    },
  },
  plugins: [],
}