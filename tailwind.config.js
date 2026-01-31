module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "electric-blue": "#2D32FF",
        "neon-lime": "#C6FF00",
        "deep-black": "#000000",
        "stark-white": "#FFFFFF",
        "hot-pink": "#FF00E5",
      },
      fontFamily: {
        display: ["Archivo Black", "sans-serif"],
        body: ["Archivo", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
