const Engineer = require("../lib/Engineer")

describe('THIS IS A TEST FOR THE ENGINEER CLASS', () => {
    it('should return the name of the object when getName method is invoked', () => {
        const name = "Molly";
        const id = 10;
        const email = "joseph.michael.dugan@gmail.com"
        const github = "dugan-joe"

        const emp = new Employee(name, id, email, github);
        expect(emp.github).toEqual(github);
    })

    it('Should return the github propertry when getGithub method is invoked', ( => {
        
    }))
})