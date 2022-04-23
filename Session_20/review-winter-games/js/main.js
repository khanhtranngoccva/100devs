//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)


function onlyEvens(numbers) {
    const evens = [];
    numbers.forEach(x => {
        x % 2 === 0 && evens.push(x);
    })
    return evens;
}

Array.prototype.filter_polyfill = function(func) {
    let result = []
    for (let x = 0; x < this.length; x++) {
        const item = this[x];
        Boolean(func(item)) && result.push(item);
    }
    return result;
}

console.log([1, 2, 6, 2, 6, 1, 6, 2, 6, 1, 563, 6, 5, 26, 3, 6, 16].filter_polyfill(x=>x%2===0));