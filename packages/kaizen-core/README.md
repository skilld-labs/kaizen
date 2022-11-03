# kaizen-core

        _/                       _/
       _/  _/       _/_/_/             _/_/_/_/       _/_/       _/_/_/
      _/_/       _/    _/      _/         _/       _/_/_/_/     _/    _/
     _/  _/     _/    _/      _/       _/         _/           _/    _/
    _/    _/     _/_/_/      _/     _/_/_/_/       _/_/_/     _/    _/


## What is it?

- This package contains several helper's components which we are using on every project usually. And also it contains several css files which attached globally to storybook and drupal by default. 
- This package can not be used as standalone. It's only working as a part of [kaizen-tg](https://www.npmjs.com/package/@skilld/kaizen-tg) package.
### Entity fake link helper

This component helps you to easily simulate link to some wrapper, based on link inside of this wrapper. For example sometimes you need a whole teaser clickable based on its title's link-field. This script requires two data attributes added to the wrapper and to the link itself.

Example of usage:
```
<div class="m-teaser" data-h-entity-fake-link-container>
  <div class="m-teaser__content">... Some content ... </div>
  <a class="m-teaser__link" href="#" data-h-entity-fake-link-target>Lorem ipsum</a>
</div>
```
Note that you can even skip this attribute `data-h-entity-fake-link-target` for your link if your clickable-container contains only one link inside. The script has a fallback in that case and it will take first link in the tree if target data attribute wasn't added for the link.

In storybook you have to call this script for your story like this:
```
useEffect(() => {
  Drupal.behaviors.kaizen_core_h_entity_fake_link.attach();
}, [args]);
```
Styles for this helper called globally for storybook, so you don't need to import them manually (but actually the styles of this component contains only `cursor: pointer;` for the wrapper)

If you need to use this helper in drupal - just uncomment drupal's library `h-entity-fake-link` in themename.libraries.yml and it will automatically work.

If you need to specify your custom configuration for drupal's usage, please see how it can be done from `themename/src/js/components/h-entity-fake-link.js`.

### Focus visible helper

This script improves focus experience for the people who don't need a visual accessibility. For example a native browser's behavior when you clicking on the button - is to add a focus rings automatically around button, but what if user doesn't have disabilities? Browser's native focus rings creates sometimes a lot of unnecessary noise and worsens perception of the site actually. So this helper component helps to show focus ring only to the people who really needs it (for example with that helper focus ring can be shown by pressing TAB key, but it will be hidden if interactive element was focused by using mouse's buttons) 

This helper component is included globally already in storybook, when you installing [@skilld/kaizen-tg](https://www.npmjs.com/package/@skilld/kaizen-tg) theme. And also this script is included globally in `src/` folder (so Drupal have this script loaded by default too). You don't need to do anything manually with it.

You can read more about focus visible [here](https://www.npmjs.com/package/focus-visible).

### Root variables
This script adds `style="--viewport-width: ...px; --viewport-height: ...px"` attribute with two css variables inside into html tag. These css variables changes dynamically on window.resize. 

This script is useful for Safari browser on iOS for example. So if you need to get a real width or height of the viewport - you have to use these variables.

You can use them for burger menus, dialogs, and other. Example of code:
```
.o-dialog {
  max-height: calc(var(--viewport-height) - 50px);
}
```

Also some bad example:
```
.full-height-element {
  height: 100vh;
}
```
This is a bad example because in Safari browser on iPhone sometimes `100vh` is not always really 100% of the viewport's height. That's why you have to use those variables.

## Other kaizen's packages
1. [kaizen-tg](https://www.npmjs.com/package/@skilld/kaizen-tg)
2. [kaizen-cg](https://www.npmjs.com/package/@skilld/kaizen-cg)
3. [kaizen-breakpoints](https://www.npmjs.com/package/@skilld/kaizen-breakpoints)

# License

This project is licensed under the MIT open source license.
