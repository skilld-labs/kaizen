import componentNotes from './globals.md';
import coloursText from '!!raw-loader!../../color/colors.css';

const component = {
  title: 'globals|Global things',
};

if (componentNotes.length) {
  component.parameters = {notes: componentNotes};
}

const colorsArray = () => {
  const matches = coloursText.match(/--color-(.*)/g);
  let colorsString = '';
  for (let i = 0; i < matches.length; i++) {
    colorsString += `
      <div style="display: flex; align-items: center; padding-bottom: 10px;">
        <div style="background-color: var(--color-${i + 1}); width: 50px; height: 50px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 0 2px black; margin-right: 10px;"></div>
        <label>--color-${i + 1}</label>
      </div>
    `;
  }
  return colorsString;
};

const iconsArray = () => {
  let iconString = '<div class="variables">';
  if (window.svgSpritePath) {
    const filenames = [];
    const icons = require.context('../../images/svg/', false, /\.svg$/);
    if (icons) {
      icons.keys().forEach((filename, index) => {
        filenames[index] = filename.split('.')[1].split('/')[1];
      });
    }

    if (filenames.length) {
      iconString += `
        <table style="width: 500px; text-align: center;">
          <thead>
            <tr style="background-color: black; color: white;">
              <td style="padding: 10px;">Icon name</td>
              <td style="padding: 10px;">Icon preview</td>
            </tr>
          </thead>
          <tbody>`;
      for (let i = 0; i < filenames.length; i++) {
        iconString += `
      <tr>
        <td style="border-bottom: 1px solid black; background-color: #f5f5f5; padding: 10px;">${filenames[i]}</td>
        <td style="border-bottom: 1px solid black; background-color: #f5f5f5; padding: 10px;">
          <svg aria-hidden="true" style="width: 70px; height: 70px; vertical-align: top;">
            <use xlink:href="${window.svgSpritePath}#svg-${filenames[i]}"></use>
          </svg>
        </td>
      </tr>
    `;
      }
      iconString += '</tbody></table>'
    }
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

export const colors = () =>
  `<div class="variables">
    ${colorsArray()}
  </div>`
;

export const icons = () =>
  iconsArray();

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
