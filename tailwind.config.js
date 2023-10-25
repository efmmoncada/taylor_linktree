const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Cormorant Garamond"'],
      },
      screens: {
        'short': {
          'raw': '(max-height: 800px)'
        }
      }
    },
  },
  plugins: [],
};
