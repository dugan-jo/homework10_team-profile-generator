class Manager {
    constructor(name, id, email, role) {
        this.getName = name;
        this.getId = id;
        this.getEmail = email;
        this.getrole = role;

        super()
    }
}

const manager = new Manager(data.getName, data.getId, data.getEmail, data.getRole)

module.exports = {
    manager
}