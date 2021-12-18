// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(readMeText) {
  // const pageReadMe = init(questions)
  fs.writeFileSync('./output/README.md', readMeText)
}

// TODO: Create a function to initialize app
function init(userInput) {
  return inquirer.prompt([
    {
      type: 'input',
      name:'title',
      message:"What is the title of your project?"
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Which license would you like?',
      choices:['MIT','Apache','GNU', 'ISC']
    },

  ]).then(userInput=> {
    const readMeText = generateMarkdown(userInput)
    writeToFile(readMeText);
    console.log(readMeText);
  });
}

// Function call to initialize app
init();

