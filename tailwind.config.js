module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b999dd",

          secondary: "#f422ca",

          accent: "#0f5882",

          neutral: "#212A30",

          "base-100": "#293B5B",

          info: "#75C1F0",

          success: "#1A935F",

          warning: "#F4C271",

          error: "#F55D42",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
