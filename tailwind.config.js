/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#012a84', // Azul royal principal
          blueDark: '#011c57', // Azul mais escuro para fundo
          magenta: '#00b4d8', // Azul ciano vibrante para destaques
          magentaHover: '#0096c7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #081730 40%, transparent 100%)',
      }
    },
  },
  plugins: [],
}
