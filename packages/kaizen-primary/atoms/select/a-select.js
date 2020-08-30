/**
 * @file
 * This is component sctipt template.
 */

import Choices from 'choices.js';

const defaultOptions = {
  containerOuter: 'a-select',
  containerInner: 'a-select__inner',
  input: 'a-select__input',
  inputCloned: 'a-select__search',
  list: 'a-select__list',
  listItems: 'a-select__list--multiple',
  listSingle: 'a-select__list--single',
  listDropdown: 'a-select__dropdown',
  item: 'a-select__item',
  itemSelectable: 'a-select__item-selectable',
  itemDisabled: 'a-select__item--disabled',
  itemChoice: 'a-select__dropdown-item',
  placeholder: 'a-select__placeholder',
  group: 'a-select__group',
  groupHeading: 'a-select__heading',
  button: 'a-select__button',
  activeState: 'a-select__dropdown--active',
  focusState: 'a-select--focus',
  openState: 'a-select--open',
  disabledState: 'a-select--disabled',
  highlightedState: 'a-select__dropdown-item--active',
  hiddenState: 'hidden',
  flippedState: 'a-select--flipped',
  loadingState: 'a-select--loading',
  noResults: 'has-no-results',
  noChoices: 'has-no-choices',
  selected: 'a-select__selected',
  icon: 'a-select__icon',
};

export default ({
  selector = 'select:not(.a-select__input)',
  options = defaultOptions,
  context = document,
} = {}) => {
  Array.prototype.forEach.call(context.querySelectorAll(selector), el => {
    // eslint-disable-next-line no-new
    new Choices(el, {
      classNames: options,
      callbackOnCreateTemplates: template => {
        return {
          item: (classNames, data) => {
            return template(`
            <div class="${classNames.item} ${
              data.highlighted
                ? classNames.highlightedState
                : classNames.itemSelectable
            }" data-item data-id="${data.id}" ${
              data.value ? `data-value="${data.value}"` : ''
            } ${data.active ? 'aria-selected="true"' : ''} ${
              data.disabled ? 'aria-disabled="true"' : ''
            }>
              <div class="${options.selected}">${data.label}</div>
              <div class="${options.icon}">
                <svg aria-hidden="true">
                  <use xlink:href="${svgSpritePath}#svg-arrow"></use>
                </svg>
              </div>
            </div>
          `);
          },
        };
      },
    });
  });
};
