const fs = require("fs");

//read the text file input.txt
var data = fs.readFileSync("./input.txt").toString().split('\n');

//parse the data
var dimension = data[0].split(" ").map(Number);

var hooverPosition = data[1].split(" ").map(Number);

var hooverInstructions = data[data.length - 1];

var dirtPositions = new Set(data.slice(2,-1));

//helper function to move the hoover and check against dimensions
function hooverMovement(x, y, array) {
    new_x = array[0] + x;
    new_y = array[1] + y;

    if (new_x < 0 || new_y < 0) {
        return hooverPosition;
    } else if (new_x > dimension[0] || new_y > dimension[1]) {
        return hooverPosition;
    } else {
        return [new_x, new_y];
    }
}; 

let dirtCleaned = 0;

//hoover movement according to instructions
for (let i = 0; i < hooverInstructions.length; i++) {
    var direction = hooverInstructions[i];

    if (direction === 'N'){
        hooverPosition = hooverMovement(0, 1, hooverPosition);
    }
    else if (direction === 'E'){
        hooverPosition = hooverMovement(1, 0, hooverPosition);
    }    
    else if (direction === 'S'){
        hooverPosition = hooverMovement(0, -1, hooverPosition);
    }
    else if (direction === 'W'){
        hooverPosition = hooverMovement(-1, 0, hooverPosition);
    }

    /*check if current patch that the hoover is on is a dirt patch. 
    add to dirt cleaned if so and delete the patch from set of dirt patches*/
    currentPatch = hooverPosition.join(' ');
    if (dirtPositions.has(currentPatch)){
        dirtCleaned += 1;
        dirtPositions.delete(currentPatch);
    }
};

console.log(hooverPosition.join(' '));
console.log(dirtCleaned);
