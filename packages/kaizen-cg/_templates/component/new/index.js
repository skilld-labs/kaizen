
// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
const cliArgs = process.argv.slice(2);
const themeName = cliArgs ? cliArgs.join(',').split('--theme_name=').pop().split(',')[0] : '';

module.exports = {
  prompt: ({ inquirer, args }) => {
    const askForThemeName = themeName ? '' : {
      type: 'input',
      name: 'themeName',
      message: "What's your theme name?",
      required: true
    };
    const questions = [
      askForThemeName,
      {
        type: 'input',
        name: 'name',
        message: "What's your component name?",
        required: true
      },
      {
        type: 'select',
        name: 'component_type',
        message: 'What type of component?',
        choices: ['Atom', 'Molecule', 'Organism', 'Template', 'Helper'],
      },
      {
        type: 'input',
        name: 'description',
        message: "What's your component description?",
        initial: "Component description placeholder"
      }
    ];

    return inquirer.prompt(questions)
  },
}
