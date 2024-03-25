import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // pokemon types colours, for gradient
    "to-bug",
    "to-dark",
    "to-dragon",
    "to-electric",
    "to-fairy",
    "to-fighting",
    "to-fire",
    "to-flying",
    "to-ghost",
    "to-grass",
    "to-ground",
    "to-ice",
    "to-normal",
    "to-poison",
    "to-psychic",
    "to-rock",
    "to-steel",
    "to-water",

    // pokemon types colours, for background
    "bg-bug",
    "bg-dark",
    "bg-dragon",
    "bg-electric",
    "bg-fairy",
    "bg-fighting",
    "bg-fire",
    "bg-flying",
    "bg-ghost",
    "bg-grass",
    "bg-ground",
    "bg-ice",
    "bg-normal",
    "bg-poison",
    "bg-psychic",
    "bg-rock",
    "bg-steel",
    "bg-water",
  ],
  theme: {
    extend: {
      colors: {
        bug: "#92bc2c", // bug
        dark: "#595761", // dark
        dragon: "#0c69c8", // dragon
        electric: "#f2d94e", // electric
        fairy: "#ee90e6", // fairy
        fighting: "#d3425f", // fighting
        fire: "#fba54c", // fire
        flying: "#a1bbec", // flying
        ghost: "#5f6dbc", // ghost
        grass: "#5fbd58", // grass
        ground: "#da7c4d", // ground
        ice: "#75d0c1", // ice
        normal: "#a0a29f", // normal
        poison: "#b763cf", // poison
        phsycic: "#fa8581", // psychic
        rock: "#c9bb8a", // rock
        steel: "#5695a3", // steel
        water: "#539ddf", // water
      },
      fontFamily: {
        title: ["var(--font-luckiest-guy)", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 20s linear infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-20%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(20%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-20%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
