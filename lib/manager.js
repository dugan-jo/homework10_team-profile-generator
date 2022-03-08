const { Employee } = require("./employee");

class Manager extends Employee{
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
        console.log(`office number: ${this.officeNumber}`)
        
       
        super(id, email, name)
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
const manager = new Manager(data.name, data.id, data.email)

module.exports = {
    manager
}