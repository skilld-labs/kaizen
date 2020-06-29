/**
 * @file
 * This is component sctipt template.
 */

export default ({ className = 'COMPONENT', context = document } = {}) => {
  Array.prototype.forEach.call(context.querySelectorAll(`.${className}:not(.js-${className})`), el => {
    // eslint-disable-next-line no-console
    console.log(el);
  });
};
