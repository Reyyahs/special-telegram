// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
function getUserInput() {
    const questions = [
        {
            type: 'input',
            message: 'Please provide the project title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Specify contribution guidelines:',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Provide testing instructions:',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Choose project license type:',
            choices: ['MIT License'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Enter your GitHub username:',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Enter your email address:',
            name: 'email',
        },
    ];

    inquirer.prompt(questions).then((response) => {
        console.log(response);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Initialize the application
function init() {
    getUserInput();
}

// Start the application
init();
