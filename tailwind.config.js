module.exports = {
  purge: ["./public/**/*.html"],
  darkmode: false, // or 'media' or 'calss'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(../img/wave-white.png)',
        'wave-pattern-dots': 'url(../img/wave-pattern-dots.png)',
        'pattern-characters-red':"url('../img/pattern-characters-red.png')",
        'character-mario': "url('../img/character-l.png')",
        'wave-pink': "url('../img/wave-pink.png')",
        'yellow-dots':"url('../img/pattern-yellow-dots.png')",
      }),
      screens:{
        'xsm': '320px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
