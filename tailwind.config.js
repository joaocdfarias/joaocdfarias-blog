/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
     "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor: {
      'light': '#F9F9F9'
    },
    extend: {
      colors: {
        // 'light': '#EFF3F5',
        'dark': '#1E1E1E'
      }
    },
  },
  plugins: [],
}
