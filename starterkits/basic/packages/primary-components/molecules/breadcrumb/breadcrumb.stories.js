import { storiesOf } from '@storybook/html';
import './breadcrumb.css';
import sprite from '../../../../dist/svg/sprite.svg';

const template = require('./m-breadcrumb.html.twig');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('molecules|breadcrumb', module).add('default', () => template({sprite}));
