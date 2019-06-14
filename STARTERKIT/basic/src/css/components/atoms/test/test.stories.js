import { storiesOf } from '@storybook/html';
import './test.css';

const template = require('./test.html.twig');
const data = require('./test.json');

storiesOf('Test', module)
  .add('with text', () => template(data))
  .add('with emoji', () => template({ variable: '😀 😎 👍 💯' }));
