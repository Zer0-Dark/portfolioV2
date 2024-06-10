/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mauve: "#C86FC9",
        aqua: "#99EDCC",
        raisinBlack: "#212227",
        rose: "#FFD9DA",
        teal: "#488286",
        yelloow: "#ffff33",
        grey2: "#3f4043",
        meadow: "#28d690"
      },
      fontFamily: {
        roboto: ['Roboto', "sans-serif"],
        fira: ['fira-sans', 'sans-serif'],
        exo: ['exo 2', "sans-serif"],
        flower: ["Indie Flower", "cursive"],
        rowdies: ["Rowdies", 'sans-serif']

      },
      screens: {
        'lg': '900px'
      }
    },
  },
  plugins: [],
}


// C86FC9 /mauve
// 99EDCC /aqua
// 212227 / raisin black
// FFD9DA / rose
// 488286 / teal
