/**
 * @file
 * This is component sctipt template.
 */

if (!document.body.classList.contains('js-root-variables')) {
  document.body.classList.add('js-root-variables');
  ['load', 'resize'].forEach((event) => {
    window.addEventListener(event, () => {
      document.documentElement.style.setProperty(
        '--window-height',
        `${window.innerHeight}px`,
      );
    });
  });
}
