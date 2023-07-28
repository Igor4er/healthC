/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        "danger": "#dc3545",
      },
      dark: {
        ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
        "danger": "#dc3545",
      }
    },],
  },
};
