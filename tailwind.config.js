/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "mobile-large": "425px",
        "mobile-medium": "375px",
      },
      backgroundImage: {
        "hero-background-large-vertical":
          "url('/src/assets/pictures/computer-hardware-large-vertical.jpg')",
        "hero-background-medium-vertical":
          "url('/src/assets/pictures/computer-hardware-medium-vertical.jpg')",
        "hero-background-small-vertical":
          "url('/src/assets/pictures/computer-hardware-small-vertical.jpg')",
        "hero-background-large-horizontal":
          "url('/src/assets/pictures/computer-hardware-large-horizontal.jpg')",
        "hero-background-medium-horizontal":
          "url('/src/assets/pictures/computer-hardware-medium-horizontal.jpg')",
        "hero-background-small-horizontal":
          "url('/src/assets/pictures/computer-hardware-small-horizontal.jpg')",
      },
    },
  },
  plugins: [],
};
