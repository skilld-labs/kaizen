import { useEffect, useState } from "@storybook/client-api";

const component = {
  title: 'globals/Global things',
};

const colorsArray = colors => {
  let colorsString = '';
  for (let i = 1; i < colors.length; i++) {
    colorsString += `
      <div style="display: flex; align-items: center; padding-bottom: 10px;">
        <div style="background-color: var(--color-${i}); width: 50px; height: 50px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 0 2px black; margin-right: 10px;"></div>
        <label>--color-${i}</label>
      </div>
    `;
  }
  return colorsString;
};

const iconsArray = icons => {
  let iconString = '<div class="variables">';
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
    Array.prototype.forEach.call(icons, icon => {
      iconString += `
        <tr>
          <td style="border-bottom: 1px solid black; background-color: #f5f5f5; padding: 10px;">${icon.getAttribute('id')}</td>
          <td style="border-bottom: 1px solid black; background-color: #f5f5f5; padding: 10px;">
            <svg aria-hidden="true" style="width: 70px; height: 70px; vertical-align: top;">
              <use xlink:href="${window.svgSpritePath}#${icon.getAttribute('id')}"></use>
            </svg>
          </td>
        </tr>
      `;
    })
    iconString += '</tbody></table>'
  }
  else {
    iconString += `No icons, if you need to get it - uncomment
      <br>
      // import svgSpritePath from '../dist/svg/sprite.svg';
      <br>
      // window.svgSpritePath = svgSpritePath;
      <br>
      in THEMENAME/.storybook/preview.js
    `;
  }
  iconString += '</div>';

  return iconString;
};

export default component;

export const colors = () => {
  const [colors, setColors] = useState([]);
  useEffect(() => {
  // hack to avoid css import
    const colorsNumber = 51;
    const computedStyle = getComputedStyle(document.documentElement);
    let computedColors = [];
    for (let index = 1; index < colorsNumber; index++) {
      const colorId = `--color-${index}`;
      const colorValue = computedStyle.getPropertyValue(colorId)
      if (colorValue) {
        computedColors[index] = colorValue;
      }
    }
    setColors(computedColors)
  }, []);
  return `<div class="variables">${colorsArray(colors)}</div>`
}
;

export const icons = () => {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    fetch(window.svgSpritePath)
      .then(response => response.text())
      .then(text => {
        const fakeIcon = document.createElement('div');
        fakeIcon.innerHTML = text
        setIcons(fakeIcon.querySelectorAll('symbol'));
      });
  }, []);
  return iconsArray(icons);
}

export const breakpoints = () =>
  `
<div class="variables">
  To check breakpoints open /THEMENAME/theme.breakpoints.yml
  <br>
  3 breakpoints:
  <ol>
    <li>"s" - min-width: 320px</li>
    <li>"m" - min-width: 640px</li>
    <li>"l" - min-width: 1024px</li>
  </ol>
</div>
`;
