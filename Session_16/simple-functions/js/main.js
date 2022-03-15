//---Easy
//create a function that subtracts two numbers and alerts the difference
const subtract = (x, y) => alert(x - y);
//create a function that divides three numbers and console logs the quotient
const divide = (x, y, z) => console.log(x / y / z);
//create a function that multiplys three numbers and returns the product
const multiply = (x, y, z) => x * y * z;
//---Medium
//create a function that takes in three numbers. Add the first two numbers
// and return the remainder of dividing the
// sum of the first two numbers by the third number
const zebra = (x, y, z) => (x + y) % z;
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers.
// If the product is greater than 100 add the sum of the last two numbers
// and console log the value. If the product is less that 100, subtract the
// difference of the last two numbers and console log the value. If the
// product is 100, multiply the first three numbers together and
// alert the remainder of dividing the fourth number
const unicorn = (x, y, z, t) => {
    const p = x * y;
    if (p > 100) {
        console.log(z + t)
    } else if (p < 100) {
        console.log(z - t)
    } else if (p === 100) {
        alert(x * y * z % t)
    }
}