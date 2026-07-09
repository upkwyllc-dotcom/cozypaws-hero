/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#EFFDF0',
        primary: {
          DEFAULT: '#1a3d1a',
          hover: '#2a5a2a',
        },
        accent: {
          DEFAULT: '#E86A10',
          hover: '#d45e0d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'serif-display': ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
