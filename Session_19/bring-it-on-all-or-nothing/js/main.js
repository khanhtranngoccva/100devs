// *Variables*
// Declare a variable, assign it a boolean, and alert the value
const boolean = true;
alert(boolean);

// Declare a variable, reassign it to your favorite color, and console log the value
let myColor;
myColor = "#ff0000";
console.log(myColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
const f1 = (x, y, z, t) => (x + y + z) / t;

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
const f2 = (x, y) => console.log(x ** y);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
const f3 = (bool, str) => Boolean(bool) && function () {
    console.log(str)
}();

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
const f4 = (number) => {
    for (let i = 1; i <= number; i++) {
        const c1 = i % 3 === 0;
        const c2 = i % 5 === 0;
        console.log(c1 && c2 ? "Fizz" : c1 ? "Buzz" : c2 ? "Fizz" : i);
    }
}