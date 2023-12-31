const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        qwigley: ["var(--font-qwigley)", "serif"],
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#090E34",
        dark: "#1D2144",
        primary: "#3457D4",
        yellow: "#FBB040",
        "body-color": "#959CB1",
        neon: {
          DEFAULT: "#37F095",
          50: "#E2FDF0",
          100: "#CFFBE5",
          200: "#A9F9D1",
          300: "#83F6BD",
          400: "#5DF3A9",
          500: "#37F095",
          600: "#11DE79",
          700: "#0DAA5D",
          800: "#097640",
          900: "#054224",
          950: "#032816",
        },
        "neon-dark": {
          DEFAULT: "#2CC077",
          50: "#B5EED2",
          100: "#A5EAC8",
          200: "#84E3B4",
          300: "#62DBA0",
          400: "#41D48B",
          500: "#2CC077",
          600: "#22925B",
          700: "#17653E",
          800: "#0D3722",
          900: "#020906",
          950: "#000000",
        },
        brown: {
          DEFAULT: "#353434",
          50: "#918F8F",
          100: "#878585",
          200: "#737171",
          300: "#5E5C5C",
          400: "#4A4848",
          500: "#353434",
          600: "#191818",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        brand: {
          DEFAULT: "#A2E771",
          100: "#F4FCEE",
          200: "#E8F9DC",
          300: "#D1F3B9",
          400: "#BBED96",
          500: "#A2E771",
          600: "#8DE151",
          700: "#76DC2E",
          800: "#63C021",
          900: "#519D1B",
          950: "#488C18",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        "2xl": "40rem",
      },
      screens: {
        xs: "450px",
        // => @media (min-width: 450px) { ... }

        sm: "575px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        xl: "1200px",
        // => @media (min-width: 1200px) { ... }

        "2xl": "1400px",
        // => @media (min-width: 1400px) { ... }
      },
      extend: {
        boxShadow: {
          signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
          one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
          sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
    },
      plugins: [require("@tailwindcss/forms")],
    },
  },
};
