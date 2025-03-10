/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['vazirmatn']
      },
      "slide-in-left": {
        "0%": {
            visibility: "visible",
            transform: "translate3d(-100%, 0, 0)",
        },
        "100%": {
            transform: "translate3d(0, 0, 0)",
        },
    },
    "slide-out-left": {
      "0%": {
          transform: "translate3d(0, 0, 0)",
      },
      "100%": {
          visibility: "hidden",
          transform: "translate3d(-100%, 0, 0)",
      },
  },
      
    },
    screens:{
       "mo":"300px",
       "de":"1000px"
    }
  },
  plugins: [],
};
