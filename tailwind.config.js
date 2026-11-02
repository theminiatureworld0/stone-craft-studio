/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Antique Paper & Vintage Parchment Palette
        parchment: {
          DEFAULT: '#FAF7F2',
          light: '#FDFBF7',
          warm: '#F4ECE1',
          dark: '#EAE1D3',
          border: '#E2D7C7',
          card: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#26201B',
          deep: '#1A1613',
          soft: '#423A33',
          muted: '#6E645A',
          subtle: '#91877C',
        },
        bronze: {
          DEFAULT: '#9E6F39',
          hover: '#825828',
          dark: '#68451D',
          light: '#F8EFE2',
          accent: '#B0824B',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'parchment-soft': '0 2px 10px rgba(38, 32, 27, 0.05)',
        'parchment-card': '0 4px 18px rgba(38, 32, 27, 0.07)',
        'parchment-hover': '0 10px 28px rgba(38, 32, 27, 0.11)',
      },
    },
  },
  plugins: [],
};
