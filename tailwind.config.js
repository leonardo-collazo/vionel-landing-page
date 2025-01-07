/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "mobile-large": "425px",
        "mobile-medium": "375px",
      },
    },
  },
  plugins: [],
};
