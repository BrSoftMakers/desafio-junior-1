/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      'pink-500': '#AF1B8D',
      'pink-300': '#C353A9',
      'pink-500': '#AF1B8D',
      'pink-700': '#99177B',
      
      'gray-200': '#F2F2F2',
      'gray-400': '#999999',

      'green-500': '#088752',

      'h-blue-700': '#002F52',
      'h-blue-300': '#326589',

      '#0588D1': '#0588D1'

    },

    //tela de login responsiva 'xl:'
    screens: {
      'Pp': '1180px',//Navbar
      'Mm': '1900px',//Navbar
      'xl': '2560px',// Tela extra-large
      'xxl': '4095px', // Tela extra-extra-large
    },
    width: {
      '715': '715px',
      '900': '900px',
    },
    height: {
      '498': '498px',
      '600': '600px',
    },
    spacing: {//Navbar
      '35rem': '35rem',
      '7': '7rem',
    },},
  },
  plugins: [],
}




