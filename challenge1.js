// console.log(fs.readFileSync('PC1input.txt','utf8'))
const fs = require ('fs');
function spew(){
    data = (fs.readFileSync('PC1input.txt','utf8').split("\n"));
}

function tallyLift(){
    spew();
    let higher = 0;
    for (let i = 0; i<=data.length; i++){
        if (data[i]>data[i-1]){
            higher++;
        }
    }
    console.log(higher);
}
function leapCheck(){
    spew();
    let jump = null;
    for (let i = 0; i<=data.length; i++){
        if (data[i+1]-data[i]>jump){
            jump = data[i+1]-data[i];
        }
    }
    console.log(jump);
}
tallyLift();
leapCheck();