import { storiesOf } from '@storybook/html';
import './breadcrumb.css';

const template = require('./m-breadcrumb.html.twig');
const data = {}
data.svgSpritePath = window.svgSpritePath

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('molecules/breadcrumb', module).add('default', () => template(data));
