const fs = require("fs");
const inquirer = require('inquirer');

// array of questions for user
const questions = ["What's your project title? ",
    "What's the description for your project? ",
    "Installation instructions: ",
    "Usage information: ",
    "Contribution guidelines: ",
    "Test instructions: ",
    "Choose license: ",
    "Enter your GitHub username: ",
    "Enter your Email: "
];

inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "title"
        },
        {
            type: "input",
            message: questions[1],
            name: "description"
        },
        {
            type: "input",
            message: questions[2],
            name: "installation instructions"
        },
        {
            type: "input",
            message: questions[3],
            name: "usage info"
        },
        {
            type: "input",
            message: questions[4],
            name: "contribution guidelines"
        },
        {
            type: "input",
            message: questions[5],
            name: "test instructions"
        },
        {
            type: "list",
            message: questions[6],
            name: "license",
            choices: [
                "A",
                "b",
                "c"
            ]
        },
        {
            type: "input",
            message: questions[7],
            name: "github"
        },
        {
            type: "input",
            message: questions[8],
            name: "email"
        }


    ]).then(function(data) {
        console.log(data);
        var filename = "README.md";
        writeToFile(filename, data);
    })


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, "", function(err) {
        if (err) {
            return console.log(err);
        }

        console.log("Done")
    });
    fs.appendFileSync(fileName, data.title);
}

// function to initialize program
function init() {

}

// function call to initialize program
init();



 
