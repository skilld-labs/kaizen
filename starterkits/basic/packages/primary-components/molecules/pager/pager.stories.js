import { storiesOf } from '@storybook/html';
import './pager.css';
import sprite from '../../../../dist/svg/sprite.svg';

const template = require('./m-pager.html.twig');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('molecules|pager', module)
  .add('default', () => template({ sprite }))
  .add('hover', () => template({ sprite, link_class: 'm-pager__link--hover', icon_class: 'm-pager__icon--hover' }))
  .add('focus', () => template({ sprite, link_class: 'm-pager__link--focus' }));
