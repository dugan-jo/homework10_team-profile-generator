// The first class is an `Employee` parent class with the following properties and methods:

// - `name`

// - `id`

// - `email`

// - `getName()`

// - `getId()`

// - `getEmail()`

// - `getRole()`&mdash;returns `'Employee'`

class Employee {
    constructor(name, id, email, role) {
        this.getName = name;
        this.getId = id;
        this.getEmail = email;
        this.getrole = role;
    }
}

const employee = new Employee(data.getName, data.getId, data.getEmail, data.getRole)

module.exports = {
    employee
}
