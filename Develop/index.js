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
            name: "installation"
        },
        {
            type: "input",
            message: questions[3],
            name: "usage info"
        },
        {
            type: "input",
            message: questions[4],
            name: "contribution"
        },
        {
            type: "input",
            message: questions[5],
            name: "test"
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


    ]).then(function (data) {
        console.log(data);
        var filename = "README.md";
        writeToFile(filename, data);
    })


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, "", function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Done")
    });

    // Appending title to readme
    fs.appendFileSync(fileName, ("# " + data.title + "\n \n"));

    // Appending description section
    fs.appendFileSync(fileName, ("## Description \n \n"))
    fs.appendFileSync(fileName, (data.description + "\n \n"))

    // Appending table of contents with section links 
    fs.appendFileSync(fileName, ("## Table of Contents \n")) 
    fs.appendFileSync(fileName, ("[Go to Installation section](##-installation)\n"));
    fs.appendFileSync(fileName, ("[Go to Usage section](##-usage)\n"));
    fs.appendFileSync(fileName, ("[Go to License section](##-license)\n\n"));
    // Appending installation section
    fs.appendFileSync(fileName, ("## Installation \n \n"))
    fs.appendFileSync(fileName, (data.installation + "\n\n"))

    // Appending usage section
    fs.appendFileSync(fileName, ("## Usage \n"))
    fs.appendFileSync(fileName, (data.usage + "\n\n"))
    // Appending License
    fs.appendFileSync(fileName, ("## License \n"))
    fs.appendFileSync(fileName, (data.license + "\n \n"))

    // Appending contribution guidelines
    fs.appendFileSync(fileName, ("## Contributing \n"))
    fs.appendFileSync(fileName, (data.contribution + "\n\n"))

    // Appending test instructions
    fs.appendFileSync(fileName, ("## Tests \n"))
    fs.appendFileSync(fileName, (data.test + "\n\n"))

    // Appending questions section
    fs.appendFileSync(fileName, ("## Questions \n If you have any additional questions here is where you can reach me: \n"))
    //Appending github link
    fs.appendFileSync(fileName, ("https://github.com/" + data.github + "\n"))
    fs.appendFileSync(fileName, (data.email + "\n"))
}

// function to initialize program
function init() {

}

// function call to initialize program
init();




