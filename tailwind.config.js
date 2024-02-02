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
        "body-bg":"rgb(240,241,247)",
        "dash-cyan":"#0dcaf0",
        "dash-purple":"#6610f2",
        "dash-purple2":"#6f42c1",
        "dash-purple3":"#8a72db",
        "dash-blue":"#0d6efd",
        "dash-pink":"#d63384",
        "dash-red":"#dc3545",
        "dash-green":"#198754",
        "dash-green2":"#20c997",
        "dash-warning":"#ffc107",
        "dash-danger":"#dc3545",
        "dash-light":"#f8f9fa",
        "dash-dark":"#212529",
        "menu-text":"#a3aed1",
        "menu-bg":"#111c43",
        "dash-black-transparent":"rgba(92,89,89,0.8)"
      },
    },
  },
  plugins: [require("daisyui")],
};
