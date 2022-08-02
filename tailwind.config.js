/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins', sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "dark-violet": "#3B3054",
        "very-dark-violet": "#232127",
        "main-cyan": "#2ACFCF",
        "cyan-hover": "#9CE2E4",
        "red-error": "#F46262",
        "main-gray": "#BFBFBF",
        "grayish-violet": "#9E9AA7",
        "off-white": "#F0F1F6",
      },
    },
    variants: {
      fill: ["hover", "focus"],
    },
  },
  plugins: [],
};
