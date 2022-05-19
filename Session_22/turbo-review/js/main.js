// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "orange juice ";
favDrink = favDrink.trim();
console.log(favDrink);
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let string = "power rangers";
console.log(string.replace(/,*/g).split(" ").includes("apple"))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rand_int(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

const RPS_ARRAY = ["rock", "paper", "scissors"];
function rock_paper_scissors() {
    return RPS_ARRAY[rand_int(0, 3)];
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice) {
    if (!RPS_ARRAY.includes(choice)) return;
    let bot_choice = rock_paper_scissors();
    if (choice === "rock" && bot_choice === "scissors" || choice === "paper" && bot_choice === "rock" || choice === "scissors" && bot_choice === "paper") {
        console.log("Win!");
    } else if (choice === bot_choice) {
        console.log("Tie");
    } else {
        console.log("Lose");
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function multiple_roshambos(array) {
    for (let roshambo of array) {
        checkWin(roshambo);
    }
}


multiple_roshambos(["scissors", "paper", "rock"]);
