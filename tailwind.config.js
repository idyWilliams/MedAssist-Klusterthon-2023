/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmserif: "DM Serif Text, serif",
        inter: "Inter, sans-serif",
      },
      colors: {
        primary: "#1B4965",
        secondary: "#CAE9FF",
        home: "#EEF8FF",
        dash: "#D7EEFF",
        font: "#111111",
      },
      backgroundImage: {
        grad: "linear-gradient(to bottom, #cae9ff,#cae9ffa1), url(./public/auth.jpg)",
      },
    },
  },
  plugins: [],
};
