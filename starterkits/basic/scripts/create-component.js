/**
 * Component creation.
 */

// eslint-disable-next-line import/no-extraneous-dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const options = require('../kaizen-options');

const sourceTemplate = `${options.buildAssets}component-source.css`;
const implementationTemplate = `${options.buildAssets}component-implementation.css`;
const twigTemplate = `${options.buildAssets}component-template.html.twig`;
const storySource = `${options.buildAssets}component.stories.js`;
const jsTemplate = `${options.buildAssets}component-script.js`;

const componentQuestions = [
  {
    type: 'input',
    name: 'component_name',
    message: 'Please enter component name',
    validate: value => {
      const pass = value !== '';
      if (pass) {
        return true;
      }
      return 'Please enter something!';
    },
  },
  {
    type: 'list',
    name: 'component_type',
    message: 'What type of component?',
    choices: ['Atom', 'Molecule', 'Organism', 'Template', 'Helper'],
  },
  {
    type: 'confirm',
    name: 'createStory',
    message: 'Create storybook component config?',
    default: true,
  },
  {
    type: 'confirm',
    name: 'createJs',
    message: 'Create components js?(if component is interactive, like slider)',
    default: false,
  },
  {
    type: 'list',
    name: 'library',
    message: 'What package to use?(Choose basic)',
    choices: ['basic', 'primary'],
    default: 'basic',
  },
];

const dataJson = {
  content: {
    content: 'Lorem Ipsum',
  },
};

function readReplaceAndSave(filePath, replaceItems, fileDest) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    Object.keys(replaceItems).forEach(replaceItem => {
      const re = new RegExp(replaceItem, 'g');
      data = data.replace(re, replaceItems[replaceItem]);
    });

    fs.writeFile(fileDest, data, 'utf8', error => {
      if (error) {
        throw error;
      }
    });
  });
}

function createComponent(component) {
  const {
    component_type: type = 'Atom',
    component_name: name = 'name',
    createStory: story = true,
    createJs: withJs = false,
    library: libraryPath = 'basic',
  } = component;

  const typePlural = `${type.toLowerCase()}s`; // Atom -> atoms
  const typeIndex = type.charAt(0).toLowerCase(); // Atom -> a
  const sourceName = `${typeIndex}-${name}`; // a-COMPONENT_NAME
  const dirName = `packages/${
    libraryPath === 'primary' ? 'primary-components' : 'components'
  }/${typePlural}/${name}/`; // components/atoms/COMPONENT_NAME/

  const sourceTarget = `${options.rootPath.project}${dirName}_${sourceName}.css`;
  const implementationTarget = `${options.rootPath.project}${dirName}${name}.css`;
  const templateTarget = `${options.rootPath.project}${dirName}${sourceName}.html.twig`;
  const dataTarget = `${options.rootPath.project}${dirName}${sourceName}.json`;
  const storyTarget = `${options.rootPath.project}${dirName}${name}.stories.js`;
  const jsTarget = `${options.rootPath.project}${dirName}${sourceName}.js`;

  const replaceInCss = {
    COMPONENT_NAME: name,
    COMPONENT_TYPE: typePlural,
    COMPONENT: sourceName,
  };

  const replaceInTwig = {
    COMPONENT: sourceName,
  };

  const componentScript = withJs
    ? `
import ${name} from './${sourceName}';
import { useEffect } from "@storybook/client-api";
`
    : '';
  const componentScriptInit = withJs
    ? `
  useEffect(() => {
    ${name}();
  }, []);
`
    : '';

  const replaceInStory = {
    COMPONENT_NAME: name,
    COMPONENT_FULL: `${typePlural}/${name}`,
    COMPONENT_SCRIPT: componentScript,
    COMPONENT_INIT: componentScriptInit,
    COMPONENT: sourceName,
  };

  const replaceInJs = {
    COMPONENT: sourceName,
  };

  fs.mkdir(
    `${options.rootPath.project}${dirName}`,
    {
      recursive: true,
    },
    err => {
      if (err) {
        throw err;
      }
      readReplaceAndSave(sourceTemplate, replaceInCss, sourceTarget);
      readReplaceAndSave(
        implementationTemplate,
        replaceInCss,
        implementationTarget,
      );

      if (story) {
        readReplaceAndSave(twigTemplate, replaceInTwig, templateTarget);
        readReplaceAndSave(storySource, replaceInStory, storyTarget);

        // Create json with default data.
        fs.writeFile(
          dataTarget,
          JSON.stringify(dataJson, null, '  '),
          'utf8',
          error => {
            if (error) {
              throw error;
            }
          },
        );
      }

      if (withJs) {
        readReplaceAndSave(jsTemplate, replaceInJs, jsTarget);
      }
    },
  );
}

inquirer.prompt(componentQuestions).then(answers => {
  createComponent(answers);
});
