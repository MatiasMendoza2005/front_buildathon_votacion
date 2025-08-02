/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        }
      },
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

