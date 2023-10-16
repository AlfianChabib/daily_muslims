/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-view": "url('/src/assets/bg-view.png')",
        "bg-nomor": "url('/src/assets/nomor.svg')",
      },
      fontFamily: {
        LPMQ: ["LPMQ IsepMisbah"],
      },
      dropShadow: {
        dm: "0px 0px 4px rgba(57,125,84, .8)",
        dm1: "0px 0px 4px rgba(57,125,84, .4)",
      },
      animation: {
        slide: "slide 0.3s cubic-bezier(0, 0, 0.2, 1) forwards",
      },
      keyframes: {
        slide: {
          "0%": {
            opacity: "0",
            display: "none",
            transform: "translateX(500px)",
          },
          "50%": {
            display: "block",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
