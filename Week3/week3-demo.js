// WEEK 3 DEMO: 
/*
Task: write a function, walkToTreasure, that takes in x and y coordinates on a beach 
and “walks” to the location of the treasure buried in the sand. 
*/
// How many steps to get to treasure

function walkToTreasure(x, y, treasureX, treasureY) {
    let steps = 0;
    // Find x ccordinate
    while(x != treasureX){
        if(x < treasureX){
            x++;
        }
        else {
            x--;
        }
        steps++;
    }
    // Find y coordinate

    while(y != treasureY){
        if(y < treasureY){
            y++;
        }
        else {
            y--;
        }
        steps++;
    }
    console.log("We have found the treasure: \n Steps taken " + steps);
}

let x = 0;
let y = 0;
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= i; j++){
        console.log(i + " " + j);
    }
}