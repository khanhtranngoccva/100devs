// Create a function that takes in a number.
// The function should return an array that contains every number from 1 to that number as seperate elements

function cheersmack(number) {
    const result = [];
    for (let i = 1; i <= number; i++) {
        result.push(i);
    }
    return result;
}

console.log(cheersmack(40))