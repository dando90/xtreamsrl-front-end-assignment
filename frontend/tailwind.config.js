/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F61', // a warm, inviting color for primary elements
        secondary: '#6B705C', // a complementary color for secondary elements
        accent: '#FFE66D', // a bright color for accents and highlights
        background: '#FFF8E7', // a soft background color
        textPrimary: '#3D405B', // a dark color for primary text
        textSecondary: '#84A98C', // a lighter color for secondary text
      },
    },
  },
  plugins: [],
}

