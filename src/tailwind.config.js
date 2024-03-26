module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins']
      },
      colors: {
        customPink: '#e0bbb1',
        customBlue: '#0196df',
        customRed: '#e53f6e',
        customBrown: '#e0bbb1',
        customBlack: '#383f51'
      },
      
    },
  },
  variants: {
    extend: {
      animation: ['hover']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}