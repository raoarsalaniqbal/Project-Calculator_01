#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly Enter Your First No:"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly Enter Your Second No:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select Operator:"
    },
]);
const { numberOne, numberTwo, operator } = answer;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    else if (operator === "/") {
        result = numberOne / numberTwo;
    }
    else if (operator === "*") {
        result = numberOne * numberTwo;
    }
    console.log("Your result is :", result);
}
else {
    console.log("Kindly Enter Valid Input");
}
console.log(answer);
