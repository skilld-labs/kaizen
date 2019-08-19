/**
 * @file
 * This is component script template.
 */
const defaultOptions = [
  {
    wrapper: '.o-clickable-block',
    link: '.o-clickable-block__link',
    excludedClass: '.contextual',
  }
];

export default ({
  options = defaultOptions,
  context = document,
} = {}) => {
  for (let i = 0; i < options.length; i++) {
    let excludedClass = options[i].excludedClass = 'undefined' ? '.contextual' : options[i].excludedClass;
    Array.prototype.slice.call(context.querySelectorAll(options[i].wrapper)).forEach((el) => {
      el.addEventListener('click', function (e) {
        if (!e.target.closest(excludedClass)) {
          e.preventDefault();
          Object.defineProperty(top.location, 'href', {
            writable: true,
            value: el.querySelector(options[i].link).getAttribute('href')
          });
        }
      });
    });
  }
};
