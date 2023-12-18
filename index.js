// node modules 
const inquirer = require('inquirer');
const fs = require("fs");


inquirer.prompt([
    {
        type: 'input',
        name: "userName",
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project?',
    },
    {
        type: 'input',
        name: 'lisence',
        message: 'What lisence should your project have?',
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'runTests',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'howToUse',
        message: 'what does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?',
    },
])