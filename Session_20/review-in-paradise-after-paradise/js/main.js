// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function main_function(input_array) {
    let n1 = input_array[0];
    let n2 = input_array[input_array.length - 1];
    let message = typeof n1 === "number" && typeof n2 === "number" ? (n1 < n2 ? "Hi" : n1 > n2 ? "Bye" : "Closing in an hour!") : "";
    message && alert(message);
}

const numbers = [1, 2, 3, 4, 5, 2];
main_function(numbers);