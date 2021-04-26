module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        teko: ["teko", "sans-serif"],
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#181818",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
