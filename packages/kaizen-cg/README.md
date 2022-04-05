# kaizen-cg

        _/                       _/
       _/  _/       _/_/_/             _/_/_/_/       _/_/       _/_/_/
      _/_/       _/    _/      _/         _/       _/_/_/_/     _/    _/
     _/  _/     _/    _/      _/       _/         _/           _/    _/
    _/    _/     _/_/_/      _/     _/_/_/_/       _/_/_/     _/    _/


## What is this?

- This is a component generator for [kaizen-tg](https://www.npmjs.com/package/@skilld/kaizen-tg)

## Usage

Once [kaizen-tg](https://www.npmjs.com/package/@skilld/kaizen-tg) is installed, use:
1. `cd [themename_dir]`
2. `yarn cc` and follow instructions

## Recommendations

1. Please follow BEM methodology when you are creating component. More about BEM's namings [here](http://getbem.com/naming/)
2. Avoid jQuery inside of component as much as possible. Try to not use external libraries with jQuery dependency. Here is a useful [link](https://github.com/nefe/You-Dont-Need-jQuery) how to make one or another thing without jQuery on vanilla javascript
3. Don't worry now about IE11 browser - [kaizen-tg](https://www.npmjs.com/package/@skilld/kaizen-tg) doesn't support it
4. Use [argTypes](https://storybook.js.org/docs/react/api/argtypes) as much as possible if your component is not static and have different modifiers, try to avoid a lot of component's variations if it's possible to replace them by argTypes
5. Don't hardcode content in `component-name.twig` or `component-name.stories.js` of the component, you should build re-usable components. All default content should be stored into `component-name.json` file, and then this content can be modified using `args` from any other component.

## Other kaizen's packages
1. [kaizen-tg](https://www.npmjs.com/package/@skilld/kaizen-tg)
2. [kaizen-core](https://www.npmjs.com/package/@skilld/kaizen-core)
3. [kaizen-breakpoints](https://www.npmjs.com/package/@skilld/kaizen-breakpoints)

# License

This project is licensed under the MIT open source license.
