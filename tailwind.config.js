/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2740", // midnight blue
        secondary: "#FDF6E3", // warm ivory
        accent: "#C5A880", // muted golden
        sage: "#A8C5A0" // supporting sage green
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.5rem" // 8px
      },
      boxShadow: {
        subtle: "0 2px 4px rgba(0,0,0,0.1)"
      }
    }
  },
  plugins: []
};
