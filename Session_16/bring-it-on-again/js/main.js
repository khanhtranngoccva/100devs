// *Variables*
// Declare a variable, assign it a value, and alert the value
let x = 10;
// alert(x);
// Create a variable, divide it by 10, and console log the value
let y = 20;
y /= 10;
// console.log(y);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function product(...numbers) {
    return numbers.reduce((a, b) => a * b);
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function add_sub(x, y, z, t) {
    console.log(x + y);
    console.log(z - t);
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function cond(x, y, z) {
    if ((100 + x - y) / z > 25) {
        console.log("WINNER!")
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function weekday(number) {
    return [0, 6].includes(number) ? "Weekend!" : "Weekday."
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function range(min, max, step, include_end) {
    for (let i=min; include_end?i<=max:i<max; i+=step) {
        console.log(i);
    }
}


range(1, 5, 1, 5)