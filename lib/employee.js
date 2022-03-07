// The first class is an `Employee` parent class with the following properties and methods:

// - `name`

// - `id`

// - `email`

// - `getName()`

// - `getId()`

// - `getEmail()`

// - `getRole()`&mdash;returns `'Employee'`

const employee = (data) => {
    return `${data.getName}
    ${data.getId}
    ${data.getEmail}
    ${data.getRole}
    `
}

module.exports = {
    employee
}
