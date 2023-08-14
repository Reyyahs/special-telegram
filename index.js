// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown')
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
            message: 'Enter usage instructions:',
            name: 'usage',
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
            choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT', 'Mozilla Public License 2.0', 'The Unlicense', 'None'],
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
        
    const markdownText = generate.generateMarkdown(response);

    writeToFile(`./output_README/${response.title}_README.md`, markdownText);

        

    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README file has been generated successfully.');
        }
    });
}

// Initialize the application
function init() {
    getUserInput();
}

// Start the application
init();
