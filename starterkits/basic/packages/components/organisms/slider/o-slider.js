/**
 * @file
 * This is Javascript slider functionality.
 */

import Splide from '@splidejs/splide';

const defaultOptions = {
  type: 'loop',
};

export default ({
  className = 'slider',
  classNameProcessed = `${className}--processed`,
  context = document,
  options = defaultOptions,
} = {}) => {
  Array.prototype.forEach.call(
    context.querySelectorAll(`.${className}:not(.${classNameProcessed})`),
    (el) => {
      const slider = new Splide(el, options);
      slider.mount();
      el.classList.add(classNameProcessed);
    },
  );
};
