/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        "2xs": { min: "220px", max: "319px" },
        "xs": { min: "320px", max: "359px" },
        "rxs": { min: "360px", max: "389px" },
        "rs": { min: "390px", max: "400px" },
        "xxs": { min: "401px", max: "539px" },
        "xss": { min: "540px", max: "639px" },
      },
      colors: {
        customBackground: "#fbfaf8",
        customText: "#34495e",
        today: "#fbfbfb",
        profile: "#e67e22",
        customgray: "#95a5a6", // Add the '#' before the color code
        customwhite: "#fcfaf8", // Add the '#' before the color code
      },
      opacity: {
        "25": "0.25", // Corrected the value, should be "0.25" instead of "0.25"
        "30": "0.3", // Corrected the value, should be "0.3" instead of "0.3"
      },
    },
  },
  plugins: [],
};
