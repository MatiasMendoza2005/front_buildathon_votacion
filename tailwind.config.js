/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-pattern': "url('/src/assets/images/logo.jpg')",
      },
      backgroundSize: {
        'logo-size': '100px 100px', // Ajusta según el tamaño deseado
      },
      backgroundOpacity: {
        'logo-opacity': '0.5', // Ajusta la transparencia
      }
    },
  },

  plugins: [],
}

