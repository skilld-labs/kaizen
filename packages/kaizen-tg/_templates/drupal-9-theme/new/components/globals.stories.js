---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/components/globals.stories.js
---
import { useEffect, useState } from '@storybook/client-api';

const component = {
  title: 'globals/Variables',
};

export default component;

const getCssVariables = (prefix) => {
  const variables = [].slice
    .call(document.styleSheets)
    .filter((styleSheet) => styleSheet.href === null)
    .map((styleSheet) => [].slice.call(styleSheet.cssRules))
    .flat()
    .filter((cssRule) => cssRule.selectorText === ':root')
    .map((cssRule) =>
      cssRule.cssText.split('{')[1].split('}')[0].trim().split(';'),
    )
    .flat()
    .filter((text) => text !== '')
    .map((text) => text.split(':'))
    .map((parts) => ({ key: parts[0].trim(), value: parts[1].trim() }));

  if (prefix) {
    return variables.filter((variable) => variable.key.startsWith(prefix));
  }
  return variables;
};

export const colorsList = () => {
  const colorVariables = getCssVariables('--color');
  return colorVariables
    .map(
      (variable) =>
        `
        <div style="display: flex; align-items: center; padding-bottom: 10px;">
          <div style="background-color: var(${variable.key}); width: 50px; height: 50px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 0 2px black; margin-right: 10px;"></div>
          <label>${variable.key}</label>
        </div>
        `,
    )
    .join('');
};

export const fonts = () => {
  const fontsVariables = getCssVariables('--font-family');
  return fontsVariables
    .map(
      (variable) =>
        ` <div style="font-family: var(${variable.key})">${variable.key}</div>`,
    )
    .join('');
};

export const fontsWeights = () => {
  const fontsVariables = getCssVariables('--font-weight');
  return fontsVariables
    .map(
      (variable) =>
        ` <div style="font-weight: var(${variable.key})">${variable.key}</div>`,
    )
    .join('');
};

export const fontsSizes = () => {
  const fontsVariables = getCssVariables('--font-size');
  return fontsVariables
    .map(
      (variable) =>
        ` <div style="font-size: var(${variable.key})">${variable.key}</div>`,
    )
    .join('');
};

export const lineHeights = () => {
  const fontsVariables = getCssVariables('--line-height');
  return fontsVariables
    .map(
      (variable) =>
        ` <div style="line-height: var(${variable.key})">${variable.key}</div>`,
    )
    .join('');
};

const iconsArray = (icons) => {
  let iconString = '';
  if (window.svgSpritePath) {
    iconString += `
    <table style="width: 500px; text-align: center;">
      <thead>
        <tr style="background-color: black; color: white;">
          <td style="padding: 10px;">Icon name</td>
          <td style="padding: 10px;">Icon preview</td>
        </tr>
      </thead>
      <tbody>`;
    Array.prototype.forEach.call(icons, (icon) => {
      iconString += `
        <tr>
          <td style="border-bottom: 1px solid black; background-color: #f5f5f5; padding: 10px;">${icon.getAttribute(
        'id',
      )}</td>
          <td style="border-bottom: 1px solid black; background-color: #f5f5f5; padding: 10px;">
            <svg aria-hidden="true" style="width: 70px; height: 70px; vertical-align: top;">
              <use xlink:href="${window.svgSpritePath}#${icon.getAttribute(
        'id',
      )}"></use>
            </svg>
          </td>
        </tr>
      `;
    });
    iconString += '</tbody></table>';
  } else {
    iconString += `No icons, if you need to get it - uncomment
      <br>
      // import svgSpritePath from '../dist/svg/sprite.svg';
      <br>
      // window.svgSpritePath = svgSpritePath;
      <br>
      in THEMENAME/.storybook/preview.js
    `;
  }

  return iconString;
};

export const iconsList = () => {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    fetch(window.svgSpritePath)
      .then((response) => response.text())
      .then((text) => {
        const fakeIcon = document.createElement('div');
        fakeIcon.innerHTML = text;
        setIcons(fakeIcon.querySelectorAll('symbol'));
      });
  }, []);
  return iconsArray(icons);
};

export const breakpoints = () => {
  let breakpoints = '';
  for (const [key, value] of Object.entries(window.themeBreakpoints.<%= h.changeCase.lower(name) %>)) {
    breakpoints += `<tr><td style="padding: 5px 10px; background: #e6e6e6;"><strong>${key}</strong><td style="padding: 5px 10px; background: #f2f2f2;">${value}</td></td></tr>`
  }
  return `
    <table style="font-size: 14px;">
      <thead>
        <tr>
          <th style="text-align: start; padding: 5px 10px; background: #fff4f4; font-weight: 400;">Breakpoint name</th>
          <th style="text-align: start; padding: 5px 10px; background: #fff4f4; font-weight: 400;">Value</th>
        </tr>
      </thead>
      <tbody>
        ${breakpoints}
      </tbody>
    </table>
  `;
};
