module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        teko: ["teko", "sans-serif"],
        roboto: ["roboto-slab", "serif"],
      },
      backgroundImage: {
        "crio-student-developer": "url('/img/projects/crioCertImg.png')",
        mymdb: "url('/img/projects/MyMDbImg.png')",
        "graph-theoretic-text-analysis":
          "url('/img/projects/graphTextImg.png')",
        "iiest-nexus": "url('/img/projects/IIESTNexusImg.png')",
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
