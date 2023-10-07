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
    },
  },
  plugins: [],
};
