const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "How would you describe your project?",
        name: "description",
      },
      {
        type: "input",
        message: "What was your motivation?",
        name: "motivation",
      },
      {
        type: "input",
        message: "What problem does it solve?",
        name: "solve",
      },
      {
        type: "input",
        message: "what did you learn?",
        name: "learn",
      },
      {
        type: "input",
        message: "How Can I Install the App?",
        name: "install",
      },
      {
        type: "input",
        message: "How Can I Use the App?",
        name: "usage",
      },
      {
        type: "input",
        message: "What is your Github Username?",
        name: "github",
      },
      {
        type: "input",
        message: "What is your Email?",
        name: "email",
      },

   
      {
        type: "list",
        message: "Do You Want to Add A License?",
        name: "license",
        choices: ["MIT", "Apache 2.0"],
      },
    ])
    .then((response) => {
      console.log(response);
    const markdown = `# ${response.title}\n
    \n## Description:\n
    ${response.description}
    \n### Motivation\n
    -${response.motivation}
    \n### What Does This Project Solve?\n
    -${response.solve}
    \n### What Did You Learn?\n
    -${response.learn}
    \n
    \n## Table of Contents:\n
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Questions](#Questions)
    - [License](#License)
      
    \n## Installation:\n
    ${response.install}

    \n## Usage:\n
    ${response.usage}
      
      
    \n## Questions\n
      https://github.com/${response.github}
      [mailto](mailto:${response.email})
    
    \n## License\n
    \n${response.license}\n
    [Choose a License](https://choosealicense.com/)  
      
    `;

      fs.writeFile("README.md", markdown, (err) =>
        err ? console.error(err) : ""
      );
    });
}

init();
