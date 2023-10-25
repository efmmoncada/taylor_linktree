const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Cormorant Garamond"'],
      },
      screens: {
        "medShort": {
          raw: "(max-height: 740px)",
        },
        short: {
          raw: "(max-height: 680px)",
        },
      },
    },
  },
  plugins: [],
};
