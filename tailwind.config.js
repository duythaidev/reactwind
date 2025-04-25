/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      // Create a custom color that uses a CSS custom value
      white: '#ffffff',
      black: '#000000',

      red: '#ef4444',
      green: '#22c55e',
      blue: '#3b82f6',
      yellow: '#facc15',
      orange: '#fb923c',
      pink: '#ec4899',
      purple: '#8b5cf6',
      gray: '#6b7280',
      lightgray: '#d1d5db',
      darkgray: '#374151',
      cyan: '#06b6d4',
      indigo: '#6366f1',
      teal: '#14b8a6',
      lime: '#84cc16',
      amber: '#f59e0b',
      emerald: '#10b981',
      sky: '#0ea5e9',

      primary: '#1e293b',
      secondary: '#64748b',
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
