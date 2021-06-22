import './example.css';
const template = require('./example.html.twig');
const data = require('./example.json');

const component = {
  title: 'atoms/example',
}

export default component;

export const basic = () => template(data);
export const withModifier = () => template({
  ...data,
  modifier_class: 'a-example--with-modifier',
});
