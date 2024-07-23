/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./node_modules/flowbite-react/lib/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    "./node_modules/primereact/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}