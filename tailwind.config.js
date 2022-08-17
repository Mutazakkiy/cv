/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        merah: '#f43f5e',
        pudar: '#64748b',
        hitam: '#0f172a'
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        format: 'Cabin'
      }
    },
  },
  plugins: [],
}
