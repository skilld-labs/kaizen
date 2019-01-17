/**
 * @file
 * This is the config file for trimlines.js.
 */

module.exports = {
  example: {
    selector: '.CSS_SELECTOR',
    trim: 1,
    forceJs: false, // In some cases display: webkit-box break layout.
    breakpoints: {
      mobile_1x: 1,
      narrow_1x: 1,
      wide_1x: 2
    }
  }
};
