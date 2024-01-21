// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontfamily: {
      custom: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      
      colors: {
        secondary: "#2A8FBD",
        primary: "#0047AB",
        tertiary: "#004D78",
        Black: "#1E1E1E",
        Gray: "#F5F5F5",
        Background: "#f9f9f9",
      },
    },
  },
  plugins: [require("daisyui")],
};
