/** @type {import('tailwindcss').Config} */
module.exports = {
  // Purga: solo se generan las clases usadas en estos archivos
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Modo oscuro según la preferencia del sistema operativo
  darkMode: 'media',
  theme: {
    extend: {
      // Tema propio del supermercado
      colors: {
        'brand-primary': '#15803d',
        'brand-primary-dark': '#166534',
        'brand-secondary': '#f59e0b',
      },
    },
  },
  plugins: [],
};
