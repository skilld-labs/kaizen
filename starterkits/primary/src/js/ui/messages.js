/**
 * @file
 * Select component.
 */

import messages from '@kaizen/primary-components/molecules/messages/m-messages';

(({ behaviors }) => {
  behaviors.kaizenMessages = {
    attach(context) {
      messages({
        messages: '.messages',
        closeIcon: '.messages__close-icon',
        context,
      });
    },
  };
})(Drupal);
