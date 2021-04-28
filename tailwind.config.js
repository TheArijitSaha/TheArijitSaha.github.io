module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        teko: ["teko", "sans-serif"],
        roboto: ["roboto-slab", "serif"],
      },
      backgroundColor: {
        primary: "#181818",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
      zIndex: {
        "-10": "-10",
      },
      maxWidth: {
        "4/5": "80%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
