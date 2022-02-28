const fs = require ('fs');
function spew(){
    return (fs.readFileSync('PC2input.txt','utf8').split("\n"));
}

function position(startX, startY){
    direction = new Array;
    magnitude = new Array;
    let data = spew();
    for(let i = 0; i<data.length-1; i++){
        let currentCommand = data[i];
        direction.push(currentCommand.split(" ")[0]);
        magnitude.push(currentCommand.split(" ")[1]);
    }
    let currentX = startX;
    let currentY = startY;
    for(let i = 0; i<data.length-1; i++){
        switch(direction[i]){
            case "forward":
                currentX = currentX+parseInt(magnitude[i]);
                break;
            case "up":
                currentY = currentY+parseInt(magnitude[i]);
                break;
            case "down": 
                currentY = currentY-parseInt(magnitude[i]);
                break;
            default:
                console.log("Something broke at position " + i);
            }
    }
    console.log("Final Position: " + currentX + ", " + currentY);
}
function zooming(startX,startY,startSpeed){
    let data = spew();
    direction = new Array;
    speed = new Array;
    for(let i = 0; i<data.length-1; i++){
        let currentCommand = data[i];
        direction.push(currentCommand.split(" ")[0]);
        speed.push(currentCommand.split(" ")[1]);
    }
    let currentX = startX;
    let currentY = startY;
    let currentSpeed = startSpeed;
    for(let i = 0; i<data.length-1; i++){
        switch(direction[i]){
            case "forward":
                currentX = currentX+parseInt(speed[i]);
                currentY = currentY+(currentSpeed*parseInt(speed[i]));
                break;
            case "up":
                currentSpeed = currentSpeed+parseInt(speed[i]);
                break;
            case "down": 
                currentSpeed = currentSpeed-parseInt(speed[i]);
                break;
            default:
                console.log("Something broke at position " + i);
            }
    }
    console.log("Final position: " + currentX + ", " + currentY);
}
position(0,0);
zooming(0,0,0);