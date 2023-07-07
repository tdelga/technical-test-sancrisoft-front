/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "test-darker-blue": "#101920",
        "test-dark-blue": "#111e27",
      },
    },
  },
  plugins: [],
};
