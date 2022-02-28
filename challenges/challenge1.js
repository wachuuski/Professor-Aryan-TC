// console.log(fs.readFileSync('PC1input.txt','utf8'))
const fs = require ('fs');
function spew(){
    return (fs.readFileSync('PC1input.txt','utf8').split("\n"));
}

function tallyLift(){
    let data = spew();
    let higher = 0;
    for (let i = 0; i < data.length-1; i++){
        // console.log(data[i], " ", data[i+1]);
        if (parseInt(data[i]) < parseInt(data[i+1])){
            higher++;
        }
    }
    console.log(higher);
}
function leapCheck(){
    let data = spew();
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
// function tallyTest(){
//     let data = spew();
//     let higher = 0;
//     for (let i = 224; i < 225; i++){
//         console.log(data[i], " ", data[i+1]);
//         if (data[i] < data[i+1]){
//             console.log (data[i+1]-data[i]);
//             higher++;
//         }
//     }
//     console.log(higher);
// }
// tallyTest();