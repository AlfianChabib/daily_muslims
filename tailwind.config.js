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
    },
  },
  plugins: [],
};
