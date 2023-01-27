// TODO: Include packages needed for this application
const genMd = require('./utils/generateMarkdown');

const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
const licenseQuestions = [];
const

// TODO: Create a function to initialize app
function init(inquirer) {
    // run prompts
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What was your motivation?',
                name: 'input',
            },
            {
                type: 'input',
                message: 'Why did you build this project?',
                name: 'input',
            },
            {
                type: 'input',
                message: 'What problem does it solve?',
                name: 'input',
            },
            {
                type: 'input',
                message: 'What did you learn?',
                name: 'input',
            },
            {
                type: 'input',
                message: 'What makes your project stand out?',
                name: 'input',
            },
            {
                type: 'checkbox',
                message: 'License Type',
                name: 'License Type',
                choices: ['MIT', 'GPLv3', 'GPL'],
            },
            {
                type: 'list',
                message: 'What is your preferred method of communication?',
                name: 'Comm-method',
                choices: ['email', 'call', 'text']
            },
            {
                type: 'input',
                message: 'What is your preferred method of communication?',
                name: 'confirm',
            },

        ])
        .then((response) => {
            writeToFile('README.md', response);
            console.log('Thanks for your time!')
        });
};

// TODO: Create a function to write README file
fs.writeFile('README.md', JSON.stringify(response), function (err) {
    err ? console.log('error', err) : console.log('success');
});
function writeToFile(fileNaREAme, data) {
    fs.appendFile('README.md', data, (err) =>
        err ? console.error(err) : console.log('add logged'))
}

// TODO: Create a function to initialize app
function init(inquirer) {
    // run prompts
}

// Function call to initialize app
init();
