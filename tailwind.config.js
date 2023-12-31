/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#052C57",
        info: "#EAF4FF",
        infoName: "#002554",
        tableHeaderBg: "#ECECEC",
        tableHeaderFont: "#052C57",
        tableRowBg: "#F7F7F7",
      },
      minWidth: {
        info: "600px",
      },
    },
  },
  plugins: [],
};
