/**
 * @file
 * This is component script template.
 */
import Tabby from 'tabbyjs/dist/js/tabby.polyfills';

const generateUniqueId = (tab) => {
  const tabId = tab.getAttribute('id');
  return tabId || Date.now() + Math.floor(Math.random() * 10000);
};

export default ({ className = 'm-tabs', context = document } = {}) => {
  context
    .querySelectorAll(`.${className}:not(.tabs-processed)`)
    .forEach((tab) => {
      const uniqueId = generateUniqueId(tab);
      tab.setAttribute('data-tabs', uniqueId);
      // eslint-disable-next-line no-unused-vars
      const tabs = new Tabby(`[data-tabs="${uniqueId}"]`);
      // uncomment next line if need to share tabs instance to control it outside.
      // tab.tabbyInstance = tabs;
      tab.classList.add('tabs-processed');
    });
};
