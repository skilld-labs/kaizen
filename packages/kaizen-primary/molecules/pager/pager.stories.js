import { storiesOf } from "@storybook/html";
import "./pager.css";

const template = require("./m-pager.html.twig");
const data = {};
data.svgSpritePath = window.svgSpritePath;

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf("molecules/pager", module)
  .add("default", () => template(data))
  .add("hover", () =>
    template({
      ...data,
      link_class: "m-pager__link--hover",
      icon_class: "m-pager__icon--hover",
    })
  )
  .add("focus", () =>
    template({ ...data, link_class: "m-pager__link--focus" })
  );
