import { storiesOf } from '@storybook/html';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import './test.css';

const template = require('./test.html.twig');
const data = require('./test.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
import drupalAttribute from 'drupal-attribute';
data.attributes = new drupalAttribute();

storiesOf('Atoms|Test', module)
  .addDecorator(withKnobs)
  .add('with twig template and json data', () => template(data))
  .add('with knobs', () => {

    const options = {
      default: '',
      withModifier: 'test--with-modifier',
    };

    const defaultValue = 'test';
    const value = select("modifier class", options, defaultValue);

    const attibutes = new drupalAttribute();
    attibutes.addClass(value);

    const knobsText = text("text", "default text");
    return template({ "attributes": attibutes, "text": knobsText });
  });
