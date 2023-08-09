/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#be1e2e", // Replace with your primary color hex code
        secondary: "#911738", // Replace with your secondary color hex code
      },
    },
  },
  plugins: [],
};
