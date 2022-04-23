// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = "?";
alert(sentence.endsWith("?"));
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let sentence2 = "jr. dev jr. dev jr. dev"
console.log(sentence2.replaceAll("jr. dev", "software engineer"));
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rand_int(start, end) {
    return Math.floor(start + Math.random() * end - start);
}
const rps_array = ["rock", "paper", "scissors", "rock"];
function rps() {
    return rps_array[rand_int(0, 3)];
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the
function checkWin(choice) {
    if (!rps_array.includes(choice)) return;
    let bot_choice = rps();
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
function roshambos (nTimes) {
    for (let i = 0; i < nTimes; i++) {
        checkWin();
    }
}