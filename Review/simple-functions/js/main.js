//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(...numbers) {
    alert(numbers.reduce((x, y)=>x - y));
}
//create a function that divides three numbers and console logs the quotient
function divide(...numbers) {
    console.log(numbers.reduce((x, y)=>x / y));
}
//create a function that multiplys three numbers and returns the product
function multiply(...numbers) {
    return numbers.reduce((x, y)=>x * y);
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function f1(x,y, z) {
    return (x + y) % z;
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value.
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function f2 (x, y, z, t) {
    const u = x * y;
    return u === 100 ? alert(x * y * z % t) : u < 100 ? console.log(z + t) : console.log(z - t);
}