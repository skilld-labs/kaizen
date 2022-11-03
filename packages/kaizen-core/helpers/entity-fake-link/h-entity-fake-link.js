/**
 * @file
 * This javascript can be used to simulate
 * link wrapper around whole entity.
 */

(({ behaviors }) => {
  behaviors.kaizen_core_h_entity_fake_link = {
    defaultEntry: () => {
      return {
        wrapperData: '[data-h-entity-fake-link-container]',
        targetData: '[data-h-entity-fake-link-target]',
        processingName: 'storybook-a-button',
      };
    },
    customEntry: () => {
      // If you need a custom entry (in case if for example in drupal
      // you have other classnames than in components - you can create
      // a new .js file in src/js folder, and put into it the following
      // construction:
      //     (({ behaviors }) => {
      //       behaviors.kaizen_core_h_entity_fake_link.customEntry = () => {
      //         return [
      //           {
      //             ...your configuration,
      //           },
      //           ...etc
      //         ];
      //       };
      //     })(Drupal);
      //
      // Then, you have to attach compiled version of your newly created
      // js file to drupal. Be sure you have attached it before original
      // component's js file -> because only in this case component's
      // js can catch your custom entry.
    },
    entries: () => {
      let entries = [behaviors.kaizen_core_h_entity_fake_link.defaultEntry()];
      if (behaviors.kaizen_core_h_entity_fake_link.customEntry()) {
        entries.push(...behaviors.kaizen_core_h_entity_fake_link.customEntry());
      }
      return entries;
    },
    attach: (context) => {
      behaviors.kaizen_core_h_entity_fake_link.entries().forEach((entry) => {
        once(entry.processingName, `${entry.wrapperData}`, context).forEach(
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
              behaviors.kaizen_core_h_entity_fake_link.handler({ el, link });
            }
          },
        );
      });
    },
    handler: (obj) => {
      const { el } = obj;
      const { link } = obj;
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
        behaviors.kaizen_core_h_entity_fake_link.fakeLinkEvents({ el, e });
      });

      el.addEventListener('keydown', (e) => {
        behaviors.kaizen_core_h_entity_fake_link.fakeLinkEvents({ el, e });
      });
    },
    fakeLinkEvents: (obj) => {
      if (obj.e.type === 'click' || obj.e.key === 'Enter') {
        const ref = obj.e.target != null ? obj.e.target : obj.e.srcElement;
        if (ref && ref.tagName !== 'A') {
          window.open(obj.el.getAttribute('data-href'), obj.el.getAttribute('data-target'));
        }
      }
    },
  };
})(Drupal);
