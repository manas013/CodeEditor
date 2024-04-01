module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#0d0f11", "900_0a": "#0000000a" },
        gray: { 200: "#eeeeee", 500: "#aaaaaa", 900: "#13161a", "900_01": "#191d23", "900_02": "#1e232b" },
        light_blue: { A700: "#007aff", A700_28: "#007aff28", A700_14: "#007aff14", A700_e5: "#007affe5" },
        blue_gray: { 100: "#cbcbcb", 400: "#7b8191", 600: "#5d677d", "600_66": "#5d677d66" },
        deep_orange: { 400: "#ff6f4f" },
        white: { A700: "#ffffff" },
        red: { A200: "#ff4d4d" },
        amber: { 300: "#ffd166" },
        teal: { A700: "#06d6a0" },
        purple: { A100: "#e568ff" },
        cyan: { 200: "#66e3f4" },
        blue: { A200: "#5481fe" },
      },
      boxShadow: {},
      fontFamily: { lato: "Lato" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
