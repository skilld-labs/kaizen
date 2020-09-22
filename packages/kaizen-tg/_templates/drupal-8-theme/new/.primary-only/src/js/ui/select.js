---
to: "<%= type==='primary' ? `${h.src()}/${h.changeCase.lower(name)}/src/js/ui/select.js` : null %>"
---
/**
 * @file
 * Select component.
 */

import select from '@skilld/kaizen-primary/atoms/select/a-select';

const selectOptions = {
  containerOuter: 'kaizen-select',
  containerInner: 'kaizen-select__inner',
  input: 'kaizen-select__input',
  inputCloned: 'kaizen-select__search',
  list: 'kaizen-select__list',
  listItems: 'kaizen-select__list--multiple',
  listSingle: 'kaizen-select__list--single',
  listDropdown: 'kaizen-select__dropdown',
  item: 'kaizen-select__item',
  itemSelectable: 'kaizen-select__item-selectable',
  itemDisabled: 'kaizen-select__item--disabled',
  itemChoice: 'kaizen-select__dropdown-item',
  placeholder: 'kaizen-select__placeholder',
  group: 'kaizen-select__group',
  groupHeading: 'kaizen-select__heading',
  button: 'kaizen-select__button',
  activeState: 'kaizen-select__dropdown--active',
  focusState: 'kaizen-select--focus',
  openState: 'kaizen-select--open',
  disabledState: 'kaizen-select--disabled',
  highlightedState: 'kaizen-select__dropdown-item--active',
  hiddenState: 'hidden',
  flippedState: 'kaizen-select--flipped',
  loadingState: 'kaizen-select--loading',
  noResults: 'has-no-results',
  noChoices: 'has-no-choices',
  selected: 'kaizen-select__selected',
  icon: 'kaizen-select__icon',
};

(({ behaviors }) => {
  behaviors.<%= h.changeCase.lower(name) %>Selects = {
    attach(context, settings) {
      select({
        selector: 'select:not(.kaizen-select__input)',
        options: selectOptions,
        svgSpritePath: settings.<%= h.changeCase.lower(name) %>SvgSpritePath,
        context,
      });
    },
  };
})(Drupal);
