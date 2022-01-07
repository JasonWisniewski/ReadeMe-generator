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
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name:'email',
      message:"What email can people contact you at with questions?"
    },
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
    {
      type: 'input',
      name: 'description',
      message: 'Please write a description of your project'
    },
    {
      // need to allow upload of screenshots with ![alt text](assets/images/screenshot.png)
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step by step description of how to get the development running'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.'
    },
    {
      type: 'input',
      name: 'features',
      message: 'Does your application have a lot of features that you would like to add to your readme?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Would you like other developers to contribute to this project?  If yes a contributor covenant will be added'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Did you write tests for your application?  If so provide examples on how to run them'
    }
  ]).then(userInput=> {
    const readMeText = generateMarkdown(userInput)
    writeToFile(readMeText);
    console.log(readMeText);
  });
}

// Function call to initialize app
init();

