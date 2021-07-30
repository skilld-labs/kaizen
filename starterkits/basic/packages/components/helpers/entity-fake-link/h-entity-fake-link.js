/**
 * @file
 * This javascript is supposed to use some link to simulate
 * link wrapper around whole entity.
 */

const fakeLinkEvents = (el, e) => {
  if (e.type === 'click' || e.key === 'Enter') {
    const ref = e.target != null ? e.target : e.srcElement;
    if (ref && ref.tagName !== 'A') {
      window.open(el.getAttribute('data-href'), el.getAttribute('data-target'));
    }
  }
};

const fakeLinkProcessed = (el, link) => {
  el.setAttribute('tabindex', '0');
  el.setAttribute('role', 'link');
  el.setAttribute('data-href', link.getAttribute('href'));
  el.setAttribute(
    'aria-label',
    link.hasAttribute('title') ? link.getAttribute('title') : link.textContent,
  );
  el.setAttribute(
    'data-target',
    link.hasAttribute('target') ? link.getAttribute('target') : '_self',
  );
  Array.prototype.forEach.call(el.querySelectorAll('a'), (innerLink) => {
    innerLink.setAttribute('tabindex', '-1');
  });

  el.addEventListener('click', (e) => {
    fakeLinkEvents(el, e);
  });

  el.addEventListener('keydown', (e) => {
    fakeLinkEvents(el, e);
  });
};

export default ({
  elClassName = 'entity-fake-link-wrapper',
  linkClassName = 'entity-fake-link',
  context = document,
} = {}) => {
  Array.prototype.forEach.call(
    context.querySelectorAll(`.${elClassName}:not(.js-entity-fake-link)`),
    (el) => {
      el.classList.add('js-entity-fake-link');
      // Multiple links inside of element you want to wrap is not expected
      // with this script. So it searches only the first matched.
      const link = el.querySelector(`a[href].${linkClassName}`);
      if (link) {
        fakeLinkProcessed(el, link);
      }
    },
  );
};
