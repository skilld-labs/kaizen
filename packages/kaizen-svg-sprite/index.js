// const svgOptions = [
//   {
//     selector: '.selector',
//     svg: 'icon-filename',
//     customClass: 'css-class', (optional, default = none)
//     wrapper: 1, (boolean), (optional, default = 0)
//     wrapperTag: '<span>', (optional, default = 'div')
//     wrapperClass: 'css-class', (optional, default = [svg-name]-wrapper)
//     whereToPutIcon: 'afterbegin', (optional, default = "afterbegin")
//   },
// ];

const processedClassName = 'js-svg-processed';

export default (svgOptions, context, spritePath) => {
  for (let i = 0; i < svgOptions.length; i++) {
    const item = svgOptions[i];
    if (item.selector && item.svg) {
      Array.prototype.forEach.call(
        context.querySelectorAll(`${item.selector}:not(.${processedClassName})`),
        el => {
          let icon = `<svg aria-hidden="true" class="js-svg-${
            item.svg
          }-attached ${item.customClass ? item.customClass : ''}">
            <use xlink:href="${spritePath}#svg-${
              item.svg
            }"></use>
          </svg>`;

          if (item.wrapper) {
            const wrapperTag = item.wrapperTag ? item.wrapperTag : 'div';
            const wrapperClasses = item.wrapperClass ? item.wrapperClass : item.svg + '-wrapper';
            icon = `<${wrapperTag} class="${wrapperClasses}">${icon}</${wrapperTag}>`
          }

          const whereToPutIcon = item.whereToPutIcon ? item.whereToPutIcon : 'afterbegin';
          el.insertAdjacentHTML(
            whereToPutIcon,
            icon,
          );

          el.classList.add(processedClassName);
        },
      );
    }
  }
}
