import './_variables.css';
import './select_external.css';
import './select.css';
import drupalAttribute from 'drupal-attribute';
import { useEffect, useState, useRef } from '@storybook/client-api';
import componentNotes from './a-select.md';
import script from './a-select';
import { basic as label } from '../label/a-label.stories';
import { basic as error_message } from '../error-message/a-error-message.stories';

const template = require('./a-select.html.twig');
const data = require('./a-select.json');

function useEffectOnUpdate(
    update = () => {},
    dependecies = null
) {
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (!isFirstRun.current) {
      update();
    } else {
      isFirstRun.current = false;
    }
  }, dependecies);
}

export default {
  title: 'atoms/select',
  parameters: { notes: componentNotes },
  argTypes: {
    disabled: {
      options: [true],
      control: { type: 'check' },
    },
    error: {
      options: [true],
      control: { type: 'check' },
    },
    inlineLabel: {
      options: [true],
      control: { type: 'check' },
    },
  },
};

export const basic = (args = {}) => {
  useEffect(() => {
    script();
  }, []);

  useEffectOnUpdate(() => {
    script();
  });

  const placeholderText = !args.placeholder
    ? data.content.placeholder
    : args.placeholder;
  const idNormalized = !args.id ? `a-select-${data.content.id}` : args.id;
  data.wrapper_attributes = new drupalAttribute();
  data.label_attributes = new drupalAttribute();
  data.select_attributes = new drupalAttribute();

  data.wrapper_attributes
    .addClass('a-select__wrapper')
    .addClass(args.wrapper_modifier_class);
  data.label_attributes
    .setAttribute('for', idNormalized)
    .addClass('a-select__label');
  data.select_attributes
    .setAttribute('id', idNormalized)
    .addClass(args.modifier_class);

  if (args.disabled && args.disabled[0]) {
    data.select_attributes
      .setAttribute('disabled')
      .addClass('a-select--disabled');
    data.wrapper_attributes.addClass('a-select__wrapper-disabled');
  } else {
    data.select_attributes
      .removeAttribute('disabled')
      .removeClass('a-select--disabled');
    data.wrapper_attributes.removeClass('a-select__wrapper-disabled');
  }

  if (args.error && args.error[0]) {
    data.error = true;
    data.select_attributes.addClass('a-select--error');
    data.wrapper_attributes.addClass('a-select__wrapper-error');
  } else {
    data.error = false;
    data.select_attributes.removeClass('a-select--error');
    data.wrapper_attributes.removeClass('a-select__wrapper-error');
  }

  if (args.error_message_text) {
    data.content.error_message = `${error_message({
      text: args.error_message_text,
    })}`;
  } else {
    data.content.error_message = `${error_message({})}`;
  }

  if (args.inlineLabel && args.inlineLabel[0]) {
    data.wrapper_attributes.addClass('a-select__wrapper--inline');
  } else {
    data.wrapper_attributes.removeClass('a-select__wrapper--inline');
  }

  if (!args.hideLabel) {
    if (args.label_text) {
      data.content.label = `${label({
        text: args.label_text,
        modifier_class: args.label_modifierClass,
      })}`;
    } else {
      data.content.label = `${label({
        modifier_class: args.label_modifierClass,
      })}`;
    }
  }
  const options = args.options || data.options;
  return template({
    ...data,
    options: [...options],
  });
};

