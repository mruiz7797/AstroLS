/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
       sans: [
          "Roboto", // Adding Roboto for body text
          ...defaultTheme.fontFamily.sans, // Fallback to default sans fonts
        ],
         heading: [
          "Montserrat", // Adding Montserrat for headings
          ...defaultTheme.fontFamily.sans, // Fallback to default sans fonts
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
