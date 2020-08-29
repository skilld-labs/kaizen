import { storiesOf } from '@storybook/html';
import './messages.css';
import messages from './m-messages';

const template = require('./m-messages.html.twig');
const data = {}
data.svgSpritePath = window.svgSpritePath

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('molecules/messages', module)
  .add('success', () => {
    document.addEventListener(
      'DOMNodeInserted',
      () => {
        messages();
      },
      false,
    );
    return template({
      ...data,
      modifier_class: 'm-messages--success',
      icon_modifier_class: 'm-messages__icon--success',
      icon: 'happy',
    });
  })
  .add('warning', () => {
    document.addEventListener(
      'DOMNodeInserted',
      () => {
        messages();
      },
      false,
    );
    return template({
      ...data,
      modifier_class: 'm-messages--warning',
      icon_modifier_class: 'm-messages__icon--warning',
      icon: 'straight',
    });
  })
  .add('error', () => {
    document.addEventListener(
      'DOMNodeInserted',
      () => {
        messages();
      },
      false,
    );
    return template({
      ...data,
      modifier_class: 'm-messages--error',
      icon_modifier_class: 'm-messages__icon--error',
      icon: 'sad',
    });
  });
