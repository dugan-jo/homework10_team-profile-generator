const fs = require('fs');
const inquirer = require('inquirer');
let employee = require('./lib/Employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const makeHTML = require('./src/src');

const newEmployee = [];


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
                return newEmployee.push(manager)
            }
            if (data.getRole === "Engineer") {
                const engineer = new Engineer(data.getName, data.getId, data.getEmail, data.github)
                return newEmployee.push(engineer)
            }
            if (data.getRole === "Intern") {
                const intern = new Intern(data.getName, data.getId, data.getEmail, data.school)
                return newEmployee.push(intern)
            }
            console.log(newEmployee, 'line 67')

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
                writeHTML(newEmployee)
                console.log(newEmployee, 'line 84')
            }
            console.log(newEmployee, 'line 86')
          
            return(newEmployee)
        })


}

   const writeHTML = (newEmployee) => {
       console.log(newEmployee)

            console.log(newEmployee, 'line 97')
            fs.writeFile('./dist/index.HTML', makeHTML(newEmployee), (err) => {
                err ? console.log(err) : console.log("The file has been created");
            })
            return(makeHTML(newEmployee));
        }

    

init()






        // const writeHTML = (data) => {

        //     console.log(data + "line 90js")
        //     fs.writeFile('index.HTML', makeHTML(newEmployee), (err) => {
        //         err ? console.log(err) : console.log("The file has been created");
        //     })
        //     return(newEmployee)
        // }
        // init()