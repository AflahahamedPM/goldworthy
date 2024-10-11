/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGrey: "#8b8e8a",
        darkGrey:"#5a5d59",
        myGrey : "#cececd"
      },
      fontFamily:{
        necto:['Necto-Mono']
      }
    },
  },
  plugins: [],
  corePlugins: {
    scrollbar: false, 
  },
  variants: {
    extend: {},
  },

};
