#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 2468;
let pinAnswer = await inquirer.prompt({
    name: "Pin",
    message: "Enter your pin",
    type: "number"
});
if (pinAnswer.Pin === myPin) {
    console.log("Correct pin code !!");
}
else {
    console.log("Incorrect Pin Code");
}
;
let opeationAnswer = await inquirer.prompt({
    name: "Operation",
    message: "Please select operation",
    type: "list",
    choices: ["Withdraw", "Check Balance"]
});
if (opeationAnswer.Operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number"
        }
    ]);
    myBalance -= amountAns.amount;
    console.log("Your remaining balance is:" + myBalance);
}
else if (opeationAnswer.Operation === "Check Balance") {
    console.log("Your remaining balance is:" + myBalance);
}
