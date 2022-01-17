// const min = 0;
// const max = 10;
// console.log(Math.round(rand*(max-min)));
//const ourRandomNum = math.floor(rand * (max-min))+min

function randRange(min,max){
    const output = Math.floor(Math.random()*(max-min))+min;
    return output;
}

console.log(randRange(10,14));