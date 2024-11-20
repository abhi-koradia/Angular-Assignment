/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#2E2E2E", 
        textPrimary: "#FFFFFF", 
        textSecondary: "#B0B0B0", 
      },
    },
  },
  plugins: [],
};
