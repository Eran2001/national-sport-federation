/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      gold: "#D09A13",
      darkgray: "#3E351F",
      lightcream: "#F5E6C8",
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
    },
  },
};
export const plugins = [];
