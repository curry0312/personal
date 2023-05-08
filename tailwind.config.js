/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "outfit": 'Outfit, sans-serif',
        "francois": "'Francois One', sans-serif"
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backgroundImage: {
        'contact': "url('/src/assets/contact-bg.jpg')",
      }
    },
  },
  plugins: [],
}

