/** @type {import('tailwindcss').Config} */
const {Colors} = require("./constants/Colors");
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: {
          primary: Colors.light.primary,
          secondary: Colors.light.secondary,
          tertiary: Colors.light.tertiary,
          success: Colors.light.success,
          text: Colors.light.text,
          background: colors.neutral[100],
        },
        dark: {
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          tertiary: Colors.dark.tertiary,
          success: Colors.dark.success,
          text: Colors.dark.text,
          background: colors.neutral[900],
        }
      }
    },
  },
  plugins: [],
}
