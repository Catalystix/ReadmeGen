// TODO: Include packages needed for this application
const genMd = require('./utils/generateMarkdown');

const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];
// const licenseQuestions = [];


    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'username',
            },
            {
                type: 'input',
                message: 'Why did you build this project?',
                name: 'build',
            },
            {
                type: 'input',
                message: 'What was your motivation?',
                name: 'motivation',
            },
           
            {
                type: 'input',
                message: 'What problem does it solve?',
                name: 'pSolve',
            },
            {
                type: 'input',
                message: 'What did you learn?',
                name: 'learn',
            },
            {
                type: 'input',
                message: 'What makes your project stand out?',
                name: 'stand',
            },
            {
                type: 'input',
                message: 'What are your contributing guidelines?',
                name: 'contribute',
            },
            {
                type: 'list',
                message: 'License Type',
                name: 'licenseType',
                choices: ['MIT', 'GPLv3', 'GPL'],
            },
            {
                type: 'list',
                message: 'How Do you install this',
                name: 'instal',
                choices: ['Will follow installation template']
            },
           

        ])
        .then((response) => {
            writeToFile('README.md', response);
            console.log('Thanks for your time!')
            console.log('message', response)
        });

// TODO: Create a function to write README file
// fs.writeFile('README.md', JSON.stringify(response), function (err) {
//     err ? console.log('error', err) : console.log('success');
// });
function writeToFile(fileName, response) {
    fs.writeFile('README.md', genMd(response), (err) =>
        err ? console.error(err) : console.log('add logged'))
}

// TODO: Create a function to initialize app
// function init(inquirer) {
//     // run prompts
//     // return inquirer.prompt()
//     // .then(response) => {
//     //     console.log(response)
//     //     return response
//     }
    
// }

// // Function call to initialize app
// init();
