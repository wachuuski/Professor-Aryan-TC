let prompt = require('prompt-sync')();
let expression = prompt("input an expression: ");
let [num1, operator, num2] = expression.split(/(\W)/);
switch (operator){
    case "+":
        console.log(parseInt(num1)+parseInt(num2));
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
        console.log("You are a moldy sponge of below average quality.")
        break;
}
// if (expressionArray[1]=="+"){
//     console.log(parseInt(expressionArray[0])+parseInt(expressionArray[2]))
// }else if (expressionArray[1]=="-"){
//     console.log(parseInt(expressionArray[0])-parseInt(expressionArray[2]))
// }else if (expressionArray[1]=="*"){
//     console.log(parseInt(expressionArray[0])*parseInt(expressionArray[2]))
// }else if (expressionArray[1]=="/"){
//     console.log(parseInt(expressionArray[0])/parseInt(expressionArray[2]))
// }else {
//     console.log("you bowl of soggy raisin bran, input a numerical expression")
// }
