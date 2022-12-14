const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const questions =() =>
  inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
    },
    {
        type: 'list',
        name: 'liscense',
        message: 'what kind of liscense should your project have?',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]
},
    {
        type: 'input',
        name: 'test',
        message: 'What command should be ran to run tests?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How do you contribute?',
    }
  ]);
  
  function generateMD(data){
  
  


    return`# ${data.title}
    ![liscense](https://img.shields.io/badge/liscense-${data.liscense}-blue.svg)
    ## Table of Contents:
    *[Installatioin](#installatioin)
    *[Usage](#usage)
    *[liscense](#liscense)
    *[Contributing](#contributing)
    *[Test](#test)
    *[Questions](#questions)
  ## Installation
  in order to install dependencies, open the terminal and run the following:
  \'\'\' ${data.installations}\'\'\'
  ### Data Usage:
  ${data.usage}
  ### Liscense:
  This project is liscensed under:
  ${data.liscense}
  ### Contributing:
  ${data.contribution}
  ### Test:
  ${data.test}
  ### Questions:
  For any questions please contact me on [Github](https://github.com/${data.username}) or ${data.author} at ${data.email}
  `
  }

  questions()
  .then((data) => fs.writeFileSync('generateREADME.md',
  generateMD(data)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));

  
  
  