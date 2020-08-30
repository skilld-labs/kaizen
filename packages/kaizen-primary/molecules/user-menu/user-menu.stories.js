import { storiesOf } from "@storybook/html";
import "./user-menu.css";

const template = require("./m-user-menu.html.twig");
const data = require("./m-user-menu.json");
data.svgSpritePath = window.svgSpritePath;

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf("molecules/user-menu", module).add("default", () =>
  template({ data })
);
