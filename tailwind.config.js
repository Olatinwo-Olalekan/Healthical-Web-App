/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "428px",
        md: "586px",
        x: "1152px",
      },
      backgroundImage: {
        "hero-pattern1": "url('bgimage.avif')",
        "hero-pattern2": "url('aboutusbg.jpg')",
        "hero-pattern3": "url('careerbg.jpg')"
      },
      fontFamily: {
        montserrat: ['"Montserrat", sans-seri'],
        poppins: ['"Poppins", sans-serif'],
      },
    },
  },
  plugins: [],
};
