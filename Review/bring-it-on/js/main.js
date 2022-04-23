// *Variables*
// Create a variable and console log the value
let x = 1;
console.log(x);
// Create a variable, add 10 to it, and alert the value
let y = 32;
y += 10;
alert(y);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(...numbers) {
    return numbers((x, y) =>x - y);
}
// Create a function that divides one number by another and returns the remainder
function modulo(x, y) {
    return x % y;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function j1 (x, y) {
    x + y > 50 && alert("Jumanji");
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(...numbers) {
    return numbers.reduce((x, y)=>x * y) % 3 === 0 && alert("Zebra");
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logword(word, number) {
    for (let i = 0; i < number; i++) {
        console.log(word);
    }
}