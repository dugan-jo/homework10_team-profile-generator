const fs = require('fs');
const inquirer = require('inquirer');
let employee = require('./lib/employee');
// const manager = require('./lib/manager');

const init = (data) => {
    return inquirer.prompt([{
                type: 'input',
                message: 'What is your name?',
                name: 'getName',
            },
            {
                type: 'input',
                message: 'What is employee id?',
                name: 'getId',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'getEmail',
            },
            {
                type: 'list',
                message: 'What is your title?',
                choices: ['Manager', 'Engineer', 'Intern'],
                default: ['Employee'],
                name: 'getRole',
            },

        ])
        .then((data) => {
            if (data.getRole === "Manager") {
                return inquirer.prompt([{
                    type: 'input',
                    message: 'What is your office number?',
                    name: 'officeNumber'
                }])
            }
            if (data.getRole === "Engineer") {
                return inquirer.prompt([{
                    type: 'input',
                    message: 'What is your GitHub',
                    name: 'github'
                }])
            }
            if (data.getRole === "Intern") {
                return inquirer.prompt([{
                    type: 'input',
                    message: 'What School do you go to?',
                    name: 'school'
                }])
            }
        })
        .then((data) => {
            return inquirer.prompt([{
                type: 'list',
                message: 'Would you like to add another Employee?',
                choices: ['YES', 'NO'],
                default: ['YES'],
                name: 'anotherInput'
            }]) 
        })
        .then((data) => {
            if (data.anotherInput === 'YES') {
                // createCard()
                init()
            } else {
                // createCard()
            }
        })
    }

const writeHTML = data => {
    fs.writeFile('index.HTML', JSON.stringify(data), (err) => {
        err ? console.log(err) : console.log("The file has been created");
    })
    console.log(data);
}

init()
// need to bring in employee.js
    .then(data => {
        console.log(new employee(data))
        return new employee(data);
        })
    .then(input => {
        return writeHTML(input)
    })

   
