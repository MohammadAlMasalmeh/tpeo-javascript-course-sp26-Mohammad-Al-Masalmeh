/*
Let’s put these concepts into practice!

First, we’ll write code using an interval to count
one by one every second starting from 1.

Then, we’ll impose a limit on the time we want to count
for by using a timeout. Let’s limit the counting to only last 15 seconds.
*/

let secondsPassed = 0;

// Indicates a second has passed
function timePassed(){

    secondsPassed++;
    // 1 seconds makes no sense
    if(secondsPassed == 1){
        console.log(secondsPassed + " second");
    }
    else{
        console.log(secondsPassed + " seconds");
    }
}

function eatBurger(){
    console.log("I ate a burgerrrrr");
}

function clearTimeInterval(intervalNumber){
    clearInterval(intervalNumber);
}

let intervalOne = setInterval(timePassed, 1000);
let intervalTwo = setInterval(eatBurger, 3000);
setTimeout(clearTimeInterval, 10750, intervalOne);


