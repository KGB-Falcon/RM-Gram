module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      spacing:{
        '0.5':'2px',
        '102':'30rem',
        '104':'31rem',
        '128':'32rem',
        '156':'39rem',       
        '160':'40rem',
        '192':'48rem',
        '224':'56rem'
      },
    },
    fontFamily: {
      'sedgwick' : ['Sedgwick Ave', 'cursive'],
      'lobster' : ['Lobster', 'cursive']
    }
  },
  plugins: [],
}