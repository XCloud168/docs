/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,md,mdx,tsx,js,jsx}"],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      screens: {
        md: "848px",
      },
    },
  },
  plugins: [],
};
