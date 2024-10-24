/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Your app's content paths
    flowbite.content(), // Flowbite's content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), // Flowbite's plugin
  ],
};
