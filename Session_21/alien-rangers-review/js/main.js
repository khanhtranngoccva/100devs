//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tv_shows = ["The Bachelor", "MasterChef"];
for (let i = 0; i < tv_shows.length; i++) {
    console.log(tv_shows[i]);
}
//Create and array of numbers
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Return a new array of numbers that includes every even number from the previous Arrays
const new_array = array.filter(x => x / 2 === 0);
console.log(new_array);
//Create a function that takes in an array of numbers
function second_lowest_highest(numbers) {
    let numbers_result = new Array(...new Set(numbers)).sort((x, y)=>x - y);
    return [numbers_result[1], numbers_result[numbers_result.length - 2]];
}
//Alert the sum of the second lowest and the second highest number
alert(second_lowest_highest([1 , 20]))