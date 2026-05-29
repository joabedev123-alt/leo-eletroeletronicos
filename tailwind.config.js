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
          blue: '#0F2C59', // Azul royal profundo
          blueDark: '#081730', // Fundo sofisticado
          magenta: '#E11D48', // Vermelho vibrante elegante
          magentaHover: '#BE123C',
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
