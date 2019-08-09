import { storiesOf } from '@storybook/html';
import './user-menu.css';
import sprite from '../../../../dist/svg/sprite.svg';

const template = require('./a-user-menu.html.twig');
const data = require('./a-user-menu.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('atoms|user-menu', module).add('default', () => template({ data, sprite }));
