import * as fs from 'fs';

function spew(){
    return (fs.readFileSync('PC4input.txt','utf8').split("\n"));
}
function mapInit(){
    let data = spew();
    let i = 0;
    let points = new Array
    let folds = new Array
    // while (true){
    //     console.log(data[i].includes("fold"));
    //     if (data[i].includes('fold')){
    //         break;
    //     }else{
    //         points.push(data[i])
    //         i++
    //     }
    // }
    for (let i = 0; i<data.length; i++){
        if (data[i].includes('fold')){
            folds.push(data[i])
        }else if(data[i]!=""){
            points.push(data[i])
        }
        else{
            break;
        }
    }
    console.log(points);
    console.log(folds);
// we now have a list of all the points in x,y format
}
mapInit();