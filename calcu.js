    let prompt = require('prompt-sync')();
function requestCalc(){
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
}
let repeat = true
while (repeat==true){
    requestCalc();
    let ask = prompt("Calculate again? (Y/N) ");
    if (ask == "Y"){

    }else if(ask == "N"){
        repeat = false;
    }else{
        console.log("That's not an answer. Good day.");
        repeat = false;
    }
}
