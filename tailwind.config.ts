/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#c71585', // main magenta/pink
          dark: '#a4126e',
        },
        secondary: {
          DEFAULT: '#2e7d32', // forest green
          light: '#4caf50',
        },
        accent: {
          DEFAULT: '#FCD34D', // warm yellow
        },
        neutral: {
          dark: '#1f2937',
          light: '#f3f4f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}