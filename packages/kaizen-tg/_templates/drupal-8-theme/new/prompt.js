// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "name",
    message: "What's your theme name?",
    required: true,
  },
  {
    type: "input",
    name: "description",
    message: "What's your theme desctiption?",
    initial: "Skilld basic theme",
  },
];
