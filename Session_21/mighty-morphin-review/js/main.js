// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let fav_holiday;
fav_holiday = "CHRISTMAS";

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let x = "abefbsjsehort";
alert(x.slice(-3));


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtract_from_100(...numbers){
    alert(Math.abs([100, ...numbers].reduce((x, y) => x - y)));
}

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function compare_3_numbers(x, y, z) {
    console.log(Math.min(x, y, z), Math.max(x, y, z));
}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function heads_and_tails() {
    let result = Math.floor(Math.random() * 2);
    if (result === 1) {
        return "Heads";
    } else {
        return "Tails";
    }
}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function loopheads(x) {
    for (let i = 0; i < x; i++) {
        console.log(heads_and_tails());
    }
}

loopheads(20)