/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      '3xl': '1700px',
      '2xl': '1500px',
      xl: '1300px',
      lg: { max: '1199.99px' },
      'lg-min': { max: '1129.99px' },
      md: { max: '991.99px' },
      sm: { max: '767.99px' },
      xs: { max: '479.99px' },
    },
    extend: {
      //пример вставки шрифтов
      fontFamily: {
        jost: ['Jost', 'sans - serif'],
        dmserif: ['DM Serif Display', 'serif'],
      },
      backgroundImage: {
        'custom-gradient-1':
          'radial-gradient(circle at 10.68% 15.98%, rgb(0, 52, 28) 0%, rgba(0, 91, 48, 0) 100%), radial-gradient(circle at 100% 0%, rgb(0, 126, 67) 0%, rgba(0, 91, 48, 0) 100%), radial-gradient(circle at 79.17% 78.17%, rgb(0, 54, 28) 0%, rgb(0, 102, 54) 100%)',
        'custom-gradient-2':
          'radial-gradient(41.09% 72.88% at 10.68% 15.98%, rgb(0, 52, 28) 0%, rgba(0, 91, 48, 0) 100%), radial-gradient(37.63% 76.37% at 100% 0%, rgb(0, 126, 67) 0%, rgba(0, 91, 48, 0) 100%), radial-gradient(79.17% 174.71% at 79.17% 78.17%, rgb(0, 54, 28) 0%, rgb(0, 102, 54) 100%)',
      },
      colors: {
        bulany: '#F4F0EC',
        anthracite: '#292F36',
        sand: '#CDA274',
        coal: '#4D5053 ',
        cyellow: '#FFD500',
      },
    },
  },
  plugins: [],
}
