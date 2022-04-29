/**
 * @file
 * This javascript can be used to simulate
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
  el.setAttribute('data-h-entity-fake-link-built', '');
  el.setAttribute('tabindex', '0');
  el.setAttribute('role', 'link');
  el.setAttribute('data-href', link.getAttribute('href'));
  el.setAttribute(
    'aria-label',
    link.hasAttribute('title')
      ? link.getAttribute('title')
      : link.textContent.replace(/\s+/g, ' ').trim(),
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

(({ behaviors }) => {
  behaviors.kaizen_core_h_entity_fake_link = {
    attach: (context, settings) => {
      const customConfig =
        settings &&
        settings.behaviors &&
        settings.behaviors.kaizen_core_h_entity_fake_link &&
        settings.behaviors.kaizen_core_h_entity_fake_link.entries
          ? settings.behaviors.kaizen_core_h_entity_fake_link.entries
          : '';
      const config = {
        entries: [
          {
            wrapperData: '[data-h-entity-fake-link-container]',
            targetData: '[data-h-entity-fake-link-target]',
          },
          ...customConfig,
        ],
        processingName: 'h-entity-fake-link',
      };
      config.entries.forEach((entry) => {
        once(config.processingName, entry.wrapperData, context).forEach(
          (el) => {
            // Multiple links inside of element you want to wrap is not expected
            // with this script. So it searches only the first matched.
            let link = el.querySelector(`a${entry.targetData}[href]`);
            if (!link) {
              // Fallback search. If targetData is not defined, then let's try
              // to catch just first matched link.
              link = el.querySelector('a[href]');
            }
            if (link) {
              fakeLinkProcessed(el, link);
            }
          },
        );
      });
    },
  };
})(Drupal);
