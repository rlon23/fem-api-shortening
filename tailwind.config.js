/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "dark-violet": "#3B3054",
      "very-dark-violet": "#232127",
      cyan: "#2ACFCF",
      "cyan-hover": "#9CE2E4",
      "red-error": "#F46262",
      gray: "#BFBFBF",
      "grayish-violet": "#9E9AA7",
      white: "#FFFFFF",
      black: "000000",
      "off-white": "#F0F1F6",
    },
    extend: {
      fontFamily: {
        poppins: ["'Poppins', sans-serif"],
      },
    },
  },
  plugins: [],
}
