import svg4everybody from 'svg4everybody';

const polyfill = () => {
  svg4everybody();
}


const getSvgIcon = (icon, spritePath) => {
  return `<svg aria-hidden="true"><use xlink:href="${spritePath}#svg-${icon}"></use></svg>`;
}

// const svgOptions = [
//   {
//     selector: 'css selector,
//     svg: 'icon filename', (optional)
//     customClass: 'css class', (optional)
//     wrapperDivs: 'array of classes', (optional)
//     innerSelector: 'css selector', (optional)
//     placeToInsert: 'afterbegin' (by default)
//   },
// ];

const addSvg = (svgOptions, context, spritePath) => {
  for (let i = 0; i < svgOptions.length; i++) {
    const item = svgOptions[i];
    Array.prototype.forEach.call(
      context.querySelectorAll(`${item.selector}:not(.svg-processed)`),
      el => {
        // we may send icon name from backend as attribute
        const inlineIcon = el.getAttribute('svg-icon');
        if (inlineIcon) {
          item.svg = inlineIcon;
        }

        if (!item.svg) return;

        let icon = `<svg aria-hidden="true" class="js-svg-${
          item.svg
        }-attached ${item.customClass ? item.customClass : ''}">
          <use xlink:href="${spritePath}#svg-${
          item.svg
        }"></use>
        </svg>`;

        // if we need to wrap icon in custom html.
        if (item.wrapperDivs) {
          item.wrapperDivs.forEach(wrapper => {
            icon = `<div class='${wrapper}'>${icon}</div>`;
          });
        }

        // we may add svg in inner selector.
        let placeToInsert = el;
        if (item.innerSelector) {
          placeToInsert = el.querySelector(item.innerSelector);
        }

        placeToInsert.insertAdjacentHTML(
          item.position ? item.position : 'afterbegin',
          icon,
        );
        el.classList.add('svg-processed');
      },
    );
  }
}

export { addSvg, getSvgIcon, polyfill }
