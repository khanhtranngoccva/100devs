// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = "Dominos";
favFood = "chicken";
alert(favFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let string = "string";
alert(string[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const f1 = (x, y, z) => alert(x / y * z);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const f2 = x => console.log(Math.cbrt(x));

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const isSummer = month => 5 <= month && month <= 7 ? alert("Yay!") : alert("Boooo!");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const logMultipleOf5 = function (x) {
    for (let i = 1; i <= x; i++) {
        i % 5 !== 0 && console.log(i);
    }
}

