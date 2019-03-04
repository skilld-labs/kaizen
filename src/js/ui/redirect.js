/**
 * @file
 * Redirect to entity.
 */

(({behaviors}) => {
  function goRedirect(el) {
    window.location.href = el.getAttribute('js-redirect-url');
  }

  behaviors.kaizenRedirect = {
    attach(context) {
      Array.prototype.forEach.call(context.getElementsByClassName('js-redirect'), (el) => {
        if (el.classList.contains('redirect-init') || !el.hasAttribute('js-redirect-url')) {
          return;
        }
        el.setAttribute('tabindex', '0');
        el.setAttribute('role', 'link');
        el.classList.add('redirect-init');

        Array.prototype.forEach.call(el.getElementsByTagName('a'), (link) => {
          link.setAttribute('tabindex', '-1');
          link.setAttribute('onclick', 'return false');
        });

        el.addEventListener('click', () => {
          goRedirect(el);
        });

        el.addEventListener('keydown', (e) => {
          if (e.keyCode === 13) {
            goRedirect(el);
          }
        });

        el.classList.add('redirect-init');

        el.addEventListener('click', () => {
          window.location.href = el.getAttribute('js-redirect-url');
        });
      });
    }
  };
})(Drupal);
