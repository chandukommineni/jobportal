/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-all-sides': '0 4px 8px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}