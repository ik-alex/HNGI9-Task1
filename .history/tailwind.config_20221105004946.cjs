/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkGrey: "hsl(220, 17%, 93%)",
        lightGrey: "hsl(221, 13%, 46%)",
        hoverGrey: " 	hsl(217, 16%, 84%)",
        darkerBlue: "hsl(215, 87%, 51%)",
        backgroundBlue: "hsl(218, 80%, 46%)",
        lightBlue: "hsl(206, 100%, 85%)",
        errorMessage: " 	hsl(8, 94%, 55%)",
      },
    },
  },
  plugins: [],
};
