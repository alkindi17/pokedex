import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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

    // pokemon types colours, for background
    "has-[:checked]:bg-bug",
    "has-[:checked]:bg-dark",
    "has-[:checked]:bg-dragon",
    "has-[:checked]:bg-electric",
    "has-[:checked]:bg-fairy",
    "has-[:checked]:bg-fighting",
    "has-[:checked]:bg-fire",
    "has-[:checked]:bg-flying",
    "has-[:checked]:bg-ghost",
    "has-[:checked]:bg-grass",
    "has-[:checked]:bg-ground",
    "has-[:checked]:bg-ice",
    "has-[:checked]:bg-normal",
    "has-[:checked]:bg-poison",
    "has-[:checked]:bg-psychic",
    "has-[:checked]:bg-rock",
    "has-[:checked]:bg-steel",
    "has-[:checked]:bg-water",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bug: "#92bc2c", // bug
        dark: "#595761", // dark
        dragon: "#0c69c8", // dragon
        electric: "#fca307", // electric
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
        psychic: "#fa8581", // psychic
        rock: "#c9bb8a", // rock
        steel: "#5695a3", // steel
        water: "#539ddf", // water
      },
      fontFamily: {
        title: ["var(--font-luckiest-guy)", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-gradient-mask-image"),
  ],
} satisfies Config;

export default config;
