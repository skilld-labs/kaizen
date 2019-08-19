import { storiesOf } from '@storybook/html';
import './clickable-block.css';
import clickableBlock from './o-clickable-block';

const template = require('./o-clickable-block.html.twig');
const data = require('./o-clickable-block.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();


storiesOf('organisms|clickable-block', module).add('default', () => {
  document.addEventListener(
    'DOMNodeInserted',
    () => {
      clickableBlock();
    },
    false,
  );
  return template(data);
});

