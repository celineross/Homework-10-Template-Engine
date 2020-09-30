const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//user prompts for inputting data
const userPrompt = [{
    type: "list",
    name: "employee",
    message: "Add a team member: ",
    choices: ["Engineer", "Intern", "Manager", "N/A"]
}]

//set of questions for engineers
const engQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter name: "
    },
    {
        type: "input",
        name: "id",
        message: "Enter ID: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter email: "
    },
    {
        type: "input",
        name: "github",
        message: "Enter GitHub username: "
    }
]

//set of questions for interns
const intQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter name: "
    },
    {
        type: "input",
        name: "id",
        message: "Enter ID: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter email: "
    },
    {
        type: "input",
        name: "school",
        message: "Enter college/university: "
    }
]

//set of questions for managers
const manQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter name: "
    },
    {
        type: "input",
        name: "id",
        message: "Enter ID: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter email: "
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter office #: "
    }
]

//function to display engineer data
function eng() {
    inquirer.prompt(engQuestions).then(function (data ) {
        const newEng = new Engineer(data.name, data.email, data.id, data.github);
        team.push(newEng);
        init();
    });
}

//function to display intern data
function int() {
    inquirer.prompt(intQuestions).then(function (data ) {
        const newInt = new Intern(data.name, data.email, data.id, data.school);
        team.push(newInt);
        init();
    });
}

//function to display manager data
function man() {
    inquirer.prompt(manQuestions).then(function (data ) {
        const newMan = new Manager(data.name, data.email, data.id, data.officeNumber);
        team.push(newMan);
        init();
    });
}

//initialize function
function init() {
    inquirer.prompt(userPrompt).then(function (data) {
        switch (data.employee) {
            case "Engineer":
                return eng();
            case "Intern":
                return int();
            case "Manager":
                return man();
            case "N/A":
                render(team);
        }
    });
}

init();
