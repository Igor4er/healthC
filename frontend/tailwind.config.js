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
      },
      healthc: { 
        "primary": "#45a2d8",
        "secondary": "#9cbef4", 
        "accent": "#794ed8",
        "neutral": "#2e222f",
        "base-100": "#ffffff",
        "info": "#4874e5",
        "success": "#20d586",
        "warning": "#ef7a06", 
        "error": "#f07590", 
        }, 
    },],
  },
};
