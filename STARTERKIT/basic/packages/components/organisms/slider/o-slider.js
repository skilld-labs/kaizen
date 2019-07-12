/**
 * @file
 * This is Javascript slider functionality.
 */

import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm';

const defaultOptions = {
  gap: 0,
  perView: 1,
  rewind: false,
  type: 'slider',
};

export default ({
  className = '.o-slider',
  classProcessed = 'o-slider--processed',
  context = document,
  options = defaultOptions,
} = {}) => {
  Array.prototype.forEach.call(context.querySelectorAll(className), el => {
    el.classList.add(classProcessed);
    new Glide(el, options).mount({ Controls });
  });
};
