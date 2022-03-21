import * as fs from 'fs';

function spew() {
    return (fs.readFileSync('PC4input.txt', 'utf8').split("\n"));
}
function mapInit() {
    let data = spew();
    let points = new Array;
    let folds = new Array;
    console.log(data.length)
    for (let i = 0; i < data.length; i++) {
        if (data[i].includes("fold")) {
            folds.push(data[i]);
        } else if (data[i].includes(",")) {
            points.push(data[i].split(","));
        }
        else {
        }
    }
    console.log(points);
    console.log(folds);
    // we now have a list of all the points in x,y format
    for (let i = 0; i < folds.length; i++) {
        if (folds[i].includes("x")){
            let currentFold = folds[i].slice(13);
            for(let j = 0; j<points.length;j++){
                if(points[j][0]>currentFold){
                    points[j][0]= points[j][0]-(2*(points[j][0]-currentFold));
                }
            }            
        }
        else if (folds[i].includes("y")){
            let currentFold = folds[i].slice(13);
            for(let j = 0; j<points.length;j++){
                if(points[j][1]>currentFold){
                    points[j][1]= points[j][1]-(2*(points[j][1]-currentFold));
                }
            }            
        }
    }
    function filterDupl(array){
        for (let i = 0; i<array.length;i++){
            let temp = array[i]
            array.splice(i,1);
                if (array.includes(temp)){
                    let period = (character) => character == temp;
                    array.splice(array.findIndex(period) - 1, 0);
                }
            array.push(temp);                
        }
        return(array);
    }
    console.log(filterDupl(points));
    console.log(points);
}
mapInit();