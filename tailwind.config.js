module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      bg_color: '#1D1D1D',
      primary: '#ff0b56',
      secondary: '#08fdd8',
      secondary_hover: '#019e86',
      third: '#909096'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
