/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./templates/**/*.liquid",
    "./snippets/**/*.liquid",
    "./sections/**/*.liquid",
    "./assets/**/*.js",
  ],
  safelist: ["bg-red-200", "h-full", "text-red-500", "w-full", "h-screen"],
  theme: {
    extend: {},
  },
  plugins: [],
};
