#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.60,
    PKR: 277.83
};
let userAns = await inquirer.prompt([{
        message: " Enter from Currency",
        name: "from",
        type: "list",
        choices: ['USD', 'EUR', 'INR', 'PKR', 'GBP']
    },
    {
        message: " Enter to Currency",
        name: "to",
        type: "list",
        choices: ['USD', 'EUR', 'INR', 'PKR', 'GBP']
    },
    {
        message: " Enter your  Amount",
        name: "amount",
        type: "number",
    }
]);
let fromAmount = currency[userAns.from];
let toAmount = currency[userAns.to];
let amount = userAns.amount;
let baseCurrency = amount / fromAmount;
let convertedCurrency = baseCurrency * toAmount;
console.log(convertedCurrency);
