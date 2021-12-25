const plugin = require("tailwindcss/plugin");

module.exports = {
  // prefix: "tw-",
  // important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mid-md-max": { max: "900px" },
        "sm-max": { max: "480px" },
        "md-max": { max: "1024px" },
      },

      padding: {
        "scr-8": "8%",
      },

      animation: {
        slideOver: "slideOver 400ms ease-out 0ms",
      },

      keyframes: {
        slideOver: {
          "0%": {
            transform: "translateY(18rem)",
          },

          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".content-hidden": {
          "content-visibility": "hidden",
        },

        ".content-visible": {
          "content-visibility": "visible",
        },
      });
    }),
  ],
};
