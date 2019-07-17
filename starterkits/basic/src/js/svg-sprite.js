import svg4everybody from 'svg4everybody';

require.context('../../images/svg/', false, /\.(svg)$/i);

document.addEventListener('DOMContentLoaded', () => {
  svg4everybody();
});

export default function getSvgIcon(icon) {
  return `<svg aria-hidden="true"><use xlink:href="${window.drupalSettings.kaizenSvgSpritePath}#svg-${icon}"></use></svg>`;
}
