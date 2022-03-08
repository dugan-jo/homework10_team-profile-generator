
class Employee {
        constructor(getName, getId, getEmail, getRole) {
            this.name = getName;
            this.id = getId;
            this.email = getEmail;
            this.role = getRole;
        }
        getName() {
            console.log(this.getName);
            return(this.getName)
        }
        getId() {
            console.log(this.id);
            return this.id
        }
        getEmail() {
            return this.email
        }
        getRole() {
            return this.role
        }
    }

// let employee = new Employee(name, id, email, role)
// Employee.prototype.logInfo = function () {
//     console.log(this.getName);
// }
// employee.logInfo();

module.exports = Employee;

