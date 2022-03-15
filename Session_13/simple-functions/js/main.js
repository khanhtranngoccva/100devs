//create a function that adds two numbers and alerts the sum
const addAlert = (x, y)=> alert(x+y);
//create a function that multiplies three numbers and console logs the product
const multiplyLog = (...stuff) => console.log(stuff.reduce((a, b)=>a*b))
//create a function that divides two numbers and returns the ???
const divideReturn = (o, d) => o / d;

// addAlert(1, 2);
// multiplyLog(1, 2, 3, 4, 5);
console.log(divideReturn(5, 2))