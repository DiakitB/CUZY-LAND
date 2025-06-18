/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        blush: {
          light: '#fde8e9',
          DEFAULT: '#f8c1c3',
          dark: '#f4a5a7',
        },
        ivory: '#fffaf0',
        brown: {
          light: '#d2b48c',
          DEFAULT: '#8b4513',
          dark: '#5a2e0e',
        },
        amber: {
          light: '#ffdab9',
          DEFAULT: '#ffbf00',
          dark: '#cc9900',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 223, 186, 0.8))',
        'about-gradient': 'linear-gradient(to bottom, rgba(255, 223, 186, 0.8), rgba(255, 255, 255, 0.8))',
      },
      animation: {
        fade: 'fadeEffect 6s ease-in-out infinite',
      },
      keyframes: {
        fadeEffect: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  purge: {
    enabled: true, // Enable purging unused styles in production
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
};
