/**
 * @file
 * This is component sctipt template.
 */

export default ({
  context = document,
  messages = '.m-messages',
  closeIcon = '.m-messages__close-icon',
} = {}) => {
  function closeMessage(el) {
    el.parentNode.removeChild(el);
  }
  Array.prototype.forEach.call(context.querySelectorAll(messages), el => {
    if (el.classList.contains('js-messages')) {
      return;
    }

    el.classList.add('js-messages');

    el.querySelector(closeIcon).addEventListener('click', () => {
      closeMessage(el);
    });

    el.querySelector(closeIcon).addEventListener('keydown', e => {
      if (e.keyCode === 13) {
        closeMessage(el);
      }
    });
  });
};
