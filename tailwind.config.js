import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Manrope", "sans-serif"] },
      backgroundImage: {
        brand: "linear-gradient(90deg, #4f39f6 0%, #9810fa 100%)",
      },
      colors: { brand: "#7c1ff5" },
    },
  },
  plugins: [daisyui],
  daisyui: { themes: ["light"] },
};
