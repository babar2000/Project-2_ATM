import inquirer from "inquirer";

interface ansType {
    userId: string,
    userPIN: number,
    accountType: string,
    transactionType: string,
    Amount: number
}

const answers = await inquirer.prompt([{
    type: "input",
    name: "userId",
    message: "Please enter your user ID"
}, {
    type: "passwrod",
    name: "userPIN",
    message: "Please enter your user PIN",
}, {
    type: "list",
    name: "accountType",
    choices: ["Current Account", "Saving Acount"],
    message: "Please select your Account type"
}, {
    type: "list",
    name: "transactionType",
    choices: ["fastCash", "withdrawCash"],
    message: "Please select your transactionType"

}, {
    type: "list",
    name: "Amount",
    choices: [1000, 2000, 5000, 10000],
    message: "Please select your Ammount",
    when(answers) {
        return answers.transactionType == "fastCash"
    }
}, {
    type: "number",
    name: "Amount",
    message: "Please enter your Ammount",
    when(answers) {
        return answers.transactionType == "withdrawCash"
    }
},
]);

if (answers.userId && answers.userPIN) {
    const balance = Math.floor(Math.random() * 1000000);
    const enteredAmmount = answers.Amount;
    if (enteredAmmount <= balance) {
        const remaining = balance - enteredAmmount;
        console.log(`You have Succfully withdraw! :  ${enteredAmmount} \n Now your remaining balance is:  ${remaining}`)
    } else {
        console.log("Insufficient balance")
    }
}
