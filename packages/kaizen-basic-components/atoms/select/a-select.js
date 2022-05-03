/**
 * @file
 * This is component sctipt template.
 */
import Choices from 'choices.js';

export default ({
  className = 'a-select',
  classNameProcessed = `${className}--processed`,
  context = document,
  options = {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    classNames: {
      containerOuter: 'choices a-select__container',
      containerInner: 'a-select__button',
      listSingle: 'a-select__button-content',
      listDropdown: 'a-select__dropdown',
      itemChoice: 'a-select__link',
    },
  },
} = {}) => {
  const items = context.querySelectorAll(
    `.${className}:not(.${classNameProcessed})`,
  );

  items.forEach((el) => {
    options = {
      ...options,
    };
    // eslint-disable-next-line no-unused-vars
    const select = new Choices(el, options);
    el.classList.add(classNameProcessed);
  });
};
