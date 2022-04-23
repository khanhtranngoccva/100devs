//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const duck = [1, 2, 3, 4, 5, 6];
Array.prototype.sum = function() {
    return this.reduce((x, y)=>x + y);
}
alert(duck.sum());
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function square_array(array) {
    return array.map(x=>Math.pow(x, 2));
}

//Create a function that takes string
//Print the reverse of that string to the console
function reverse_string(string) {
    return [...string].reverse().join("");
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(string) {
    return reverse_string(string).toLowerCase() === string.toLowerCase();
}

console.log(palindrome("ABUTTTUBA"));