/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#000AFF",
          500: "#6B67F5",
          900: "#090660"
        },
        gray: {
          100: "#808080",
          800: "#2E2E2E"
        }
      }
    },
  },
  plugins: [],
}
