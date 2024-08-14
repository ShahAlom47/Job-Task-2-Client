/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-p': '#0063d1',
        'color-text': '#111111',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

