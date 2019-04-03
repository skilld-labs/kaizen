const autoprefixer = require('autoprefixer');

module.exports = () => ({
  map: false,
  plugins: [
    autoprefixer({
      cascade: false,
    }),
  ],
});
