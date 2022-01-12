let prompt = require('prompt-sync')();
let expression = prompt("input an expression: ");
let expressionArray = expression.split(/(\W)/)
if (expressionArray[1]="+"){
    console.log(parseInt(expressionArray[0])+parseInt(expressionArray[2]))
}else if (expressionArray[1]="-"){
    console.log(parseInt(expressionArray[0])-parseInt(expressionArray[2]))
}else if (expressionArray[1]="*"){
    console.log(parseInt(expressionArray[0])*parseInt(expressionArray[2]))
}else if (expressionArray[1]="/"){
    console.log(parseInt(expressionArray[0])/parseInt(expressionArray[2]))
}else {
    console.log("you bowl of soggy raisin bran, input a numerical expression")
}