/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marineBlue: "#02295a",
        purplishBlue: "#473dff",
        pastelBlue: "#adbeff",
        lightBlue: "#bfe2fd",
        strawberryRed: "#ed3548",
        coolGray: "#9699ab",
        lightGray: "#d6d9e6",
        magnolia: "#f0f6ff",
        alabaster: "#fafbff",
      },
      backgroundImage: {
        sideimage: "url('/bg-sidebar-desktop.svg')",
      },
      fontFamily: {
        heading: ["ubuntu"],
      },
    },
  },
  plugins: [],
}
