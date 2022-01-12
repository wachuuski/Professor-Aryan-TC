let prompt = require('prompt-sync')();
let expression = prompt("input some text: ");
let expressionArray = expression.split("+"||"-"||"*"||"/")
console.log(expressionArray);
