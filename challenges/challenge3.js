import * as fs from 'fs';
function spew(){
    return (fs.readFileSync('PC3input.txt','utf8').split("\n"));
}

function gamma(){
    let data = spew();
    let gammaValue = new Array;
    for (let i = 0; i < data[0].split('').length-1; i++){
        let findxth = new Array;
        let digitTrack = 0;
        for (let j = 0; j < data.length-1; j++){
            digitTrack += parseInt((data[j].split('')[i]));
        }
        if (digitTrack > data.length/2){
            gammaValue.push(1);
            digitTrack = 0;
        }else{
            gammaValue.push(0);
            digitTrack = 0;
        }
    }
    
    return gammaValue;

}
function epsilon(){
    let data = gamma();
    let epsilonValue = new Array
    for (let i = 0; i<data.length; i++){
        switch (data[i]){
            case 0:
                epsilonValue.push(1);
                break;
            case 1:
                epsilonValue.push(0);
                break;
            default:
                console.log("something broke lmao");
                throw new Error;
        }
    }
    return epsilonValue;
}
function powerConsumption(){
    let data = spew();
    let gammaValue = gamma();
    let gammaDec = 0
    for (let i = 0; i < data[0].split('').length-1; i++){
        gammaDec += parseInt(gammaValue[gammaValue.length-(1+i)])*(Math.pow(2,i));
    }
    let epsilonValue = epsilon();
    let epsilonDec = 0
    for (let i = 0; i < data[0].split('').length-1; i++){
        epsilonDec += parseInt(epsilonValue[epsilonValue.length-(1+i)])*(Math.pow(2,i));
    }
    console.log("Gamma was: " + gammaDec);
    console.log("Epsilon was: " + epsilonDec);
    console.log("Total power consumption was: " + gammaDec*epsilonDec);
}
powerConsumption();

