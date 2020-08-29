---
to: "<%= type==='primary' ? `${h.src()}/${h.changeCase.lower(name)}/src/js/ui/messages.js` : null %>"
---
/**
 * @file
 * Select component.
 */

import messages from '@skilld/kaizen-primary/molecules/messages/m-messages';

(({ behaviors }) => {
  behaviors.<%= h.changeCase.lower(name) %>Messages = {
    attach(context) {
      messages({
        messages: '.messages',
        closeIcon: '.messages__close-icon',
        context,
      });
    },
  };
})(Drupal);
