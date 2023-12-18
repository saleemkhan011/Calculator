import inquirer from "inquirer";
async function subtract() {
    let answer = await inquirer.prompt([
        {
            type: 'number',
            name: 'num1',
            message: 'Please enter first number: '
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Please enter second number: '
        },
    ]);
    console.log(`The answer of ${answer.num1} - ${answer.num2} is ${answer.num1 - answer.num2}`);
}
export default subtract;
