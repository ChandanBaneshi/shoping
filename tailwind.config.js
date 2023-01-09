/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: '#080A1A',
        subMain : 'F20000',
        dry : '0B02F9',
        star : '#FFB000',
        text : '#C0C0C0',
        border : '#AB5563',
        dryGry : '#E0D5D5',
      }
    },
  },
  plugins: [],
}
