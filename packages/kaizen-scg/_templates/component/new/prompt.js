
// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

module.exports = [
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
]
