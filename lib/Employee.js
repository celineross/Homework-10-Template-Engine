// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
}

getRole(); //should return employee

module.exports = Employee;