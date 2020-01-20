import { storiesOf } from '@storybook/html';
import './messages.css';
import messages from './m-messages';
import sprite from '../../../../dist/svg/sprite.svg';

const template = require('./m-messages.html.twig');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('molecules|messages', module)
  .add('success', () => {
    document.addEventListener(
      'DOMNodeInserted',
      () => {
        messages();
      },
      false,
    );
    return template({
      modifier_class: 'm-messages--success',
      icon_modifier_class: 'm-messages__icon--success',
      sprite: sprite,
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
      modifier_class: 'm-messages--warning',
      icon_modifier_class: 'm-messages__icon--warning',
      sprite: sprite,
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
      modifier_class: 'm-messages--error',
      icon_modifier_class: 'm-messages__icon--error',
      sprite: sprite,
      icon: 'sad',
    });
  });
