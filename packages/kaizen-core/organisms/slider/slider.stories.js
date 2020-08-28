import { useEffect } from "@storybook/client-api";
import './slider.css';
import slider from './o-slider';

const template = require('./o-slider.html.twig');
const data = require('./o-slider.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

const component = {
  title: 'organisms/slider'
}

export default component;

export const basic = () => {
  useEffect(() => {
    slider();
  }, []);
  return template(data)
};
