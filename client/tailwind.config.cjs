/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Include the main HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS/JSX/TSX files in the src directory
  ],
  safelist: [
    // Add any dynamic class names here to prevent PurgeCSS from removing them
    'bg-blush-light',
    'bg-blush-dark',
    'text-amber-light',
    'text-amber-dark',
    'font-serif',
    'font-sans',
    'hero-gradient',
    'about-gradient',
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
};
