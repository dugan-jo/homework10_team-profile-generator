const fs = require('fs');
const inquirer = require('inquirer');
let employee = require('./lib/Employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const newEmployees = [];


const init = () => {
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
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'officeNumber',
                when: (answers) => answers.getRole === 'Manager'
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'github',
                when: (answers) => answers.getRole === 'Engineer'
            },
            {
                type: 'input',
                message: 'What school do you go to?',
                name: 'school',
                when: (answers) => answers.getRole === 'Intern'
            },
        ])
        .then((data) => {
            if (data.getRole === "Manager") {
                const manager = new Manager(data.getName, data.getId, data.getEmail, data.officeNumber)
                newEmployees.push(manager)
            }
            if (data.getRole === "Engineer") {
                const engineer = new Engineer(data.getName, data.getId, data.getEmail, data.github)
                newEmployees.push(engineer)
            }
            if (data.getRole === "Intern") {
                const intern = new Intern(data.getName, data.getId, data.getEmail, data.school)
                newEmployees.push(intern)
            }

            console.log(newEmployees)
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
                init()
            } else {
                // writeHTML()
                // createCard()
            }
        })
}


// const writeHTML = () => {
//     fs.writeFile('index.HTML', makeHTML(employeeArr), (err) => {
//         err ? console.log(err) : console.log("The file has been created");
//     })
//     console.log(data);
// }

init()
//     // need to bring in employee.js
//     .then(data => {
//         // console.log(new employee(data))
//         return new employee(data);
//     })

//     .then(input => {
//         return writeHTML(input)
//     })