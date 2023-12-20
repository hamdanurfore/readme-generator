const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
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
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project?',
    },
    {
        type: 'input',
        name: 'licence',
        message: 'What licence should your project have?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        console.log(answers)
        const templateREADME = generateMarkdown(answers)
        console.log(templateREADME)
        fs.writeFile("generatedREADME.md",templateREADME, (err)=>{
            if(err){
                throw err
            }
            console.log("file created")
        })


    })


}


// function call to initialize program
init();