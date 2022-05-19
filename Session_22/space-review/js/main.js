//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numberArray = [1, 2, 3, 4, 5, 6, 7];

Math.sumIterable = function(array) {
    return array.reduce((x, y) => +x + +y, 0);
}

console.log(Math.sumIterable(numberArray));

//Create a function that takes in an array of numbers
function squared(array) {
    let result = array.slice();
    result.forEach((v, i)=>result[i]=Math.pow(v, 2));
    return result;
}
//Return a new array of numbers that is every original number squared
//Create a function that takes string
//Print the reverse of that string to the console
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
}
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(string) {
    return string.reverse() === string;
}


console.log(palindrome("thissiht"));


[].reduce((x, y)=>x+y)