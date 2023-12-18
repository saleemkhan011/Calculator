import inquirer from "inquirer";

import add from "./addition.js"
import subtract from "./subtaction.js"
import multiply from "./multiplication.js"
import divide from "./division.js"

let answer = await inquirer.prompt(
    {
        type: 'list',
        name: 'Operation',
        choices: ['Addition','Subtraction','Multiplication','Division'],
        message: 'Select Operation:'
    })


if (answer.Operation === 'Addition'){
    add()
}
else if(answer.Operation === 'Subtraction'){
    subtract()
}
else if(answer.Operation === 'Multiplication'){
    multiply()
}
else if(answer.Operation === 'Division'){
    divide()
}