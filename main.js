#! /usr/bin/env node
import inquirer from "inquirer";
//printing
console.log("\n\twellcone to \'maazhameed\' - CLI Simple calculator\n ");
let answers = await inquirer.prompt([
    {
        message: "Enter your frist number", type: "number", name: "numberOne"
    },
    { message: "Enter your second number", type: "number", name: "numbertwo", },
    {
        message: "Enter your operator",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"]
    },
]);
console.log(answers);
//
if (answers.operator === "addition") {
    console.log(answers.numberOne + answers.numbertwo);
}
else if (answers.operator === "subtraction") {
    console.log(answers.numberOne - answers.numbertwo);
}
else if (answers.operator === "multiplication") {
    console.log(answers.numberOne * answers.numbertwo);
}
else if (answers.operator === "division") {
    console.log(answers.numberOne / answers.numbertwo);
}
else {
    console.log("Invalid input");
}
