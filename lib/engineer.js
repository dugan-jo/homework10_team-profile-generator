// const engineer = (data) => {
//     return `${data.getName}
//     ${data.getId}
//     ${data.getEmail}
//     ${data.getRole}
//     `
// }




class Engineer {
    constructor(name, id, email, role) {
        this.getName = name;
        this.getId = id;
        this.getEmail = email;
        this.getrole = role;
    }
}

const engineer = new Engineer(data.getName, data.getId, data.getEmail, data.getRole)

module.exports = {
    engineer
}