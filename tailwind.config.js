/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      // Create a custom color that uses a CSS custom value
      primary: "rgb(0 0 0)",
    },
    extend: {},
  },
  plugins: [
    ({ addBase }) =>
      addBase({
        ":root": {
          "--color-values": "255 0 0",
          "--color-rgb": "rgb(255 255 0)",
        },
      }),
  ],
};
