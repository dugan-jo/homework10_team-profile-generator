const Employee = require("../lib/Employee")

describe('THEST FOR EMPLOYEE CLASS', () => {
    test('should return true, this is a dummy test', () => {
        const emp = new Employee();
        expect(typeof emp).toBe("object")
    })
    test('should have a new property  when instantiated with a name parameter', () => {
        const name = "Molly";
        const emp = new Employee(name);
        expect(emp.name).toEqual(name);
    })
    test('should have an id property with an id parameter', () => {
        const name = "Molly";
        const id = 10;
        const emp = new Employee(name, id);
        expect(emp.id).toEqual(id);
    })
    test('should have an id property with an id parameter', () => {
        const name = "Molly";
        const id = 10;
        const email = "joseph.michael.dugan@gmail.com"
        const emp = new Employee(name, id, email);
        expect(emp.email).toEqual(email);
    })


    // TEST METHODS 
    it('should return the name of the object when getName method is invoked', () => {
        const name = "Molly";
        const id = 10;
        const email = "joseph.michael.dugan@gmail.com"
        const emp = new Employee(name, id, email);
        expect(emp.getName()).toEqual(name);
    })
    it('should return the name of the object when getName method is invoked', () => {
        const name = "Molly";
        const id = 10;
        const email = "joseph.michael.dugan@gmail.com"
        const emp = new Employee(name, id, email);
        expect(emp.getId()).toEqual(id);
    })
    it('should return the name of the object when getName method is invoked', () => {
        const name = "Molly";
        const id = 10;
        const email = "joseph.michael.dugan@gmail.com"
        const emp = new Employee(name, id, email);
        expect(emp.getEmail()).toEqual(email);
    })
    it('should return the name of the object when getName method is invoked', () => {
        const name = "Molly";
        const id = 10;
        const email = "joseph.michael.dugan@gmail.com"
        const emp = new Employee(name, id, email);
        expect(emp.getRole()).toEqual("Employee");
    })
})