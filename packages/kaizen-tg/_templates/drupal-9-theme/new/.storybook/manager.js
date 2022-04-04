---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/.storybook/manager.js
---
import { addons } from '@storybook/addons';

addons.setConfig({
  panelPosition: 'right',
});
