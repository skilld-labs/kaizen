/**
 * @file
 * This is the config file for trimlines.js.
 *
 * If you have breakpoints on project default value will not work. You must add
 * trim line value for each resolution. If resolution not added, the text won't
 * trim on this resolution.
 */

module.exports = {
  example: {
    selector: '.CSS_SELECTOR',
    trim: 1,
    forceJs: false, // In some cases display: webkit-box break layout.
    breakpoints: {
      mobile_1x: 1
    }
  }
};
