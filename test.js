const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const iterations = 10000000;

function execution_time(func, count, thisArg) {
    count ??= 10;
    const startTime = performance.now();
    for (let i = 0; i < count; i++) {
        func.call(thisArg);
    }
    const endTime = performance.now();
    const result = (endTime - startTime).toFixed(2);
    console.log(`Time taken for ${func.toString()}: ${result} milliseconds`);
    return result;
}

execution_time(() => {
    array.forEach((value) => {
        // value *= 2;
    })
}, 1000000)
execution_time(() => {
    for (let element of array) {
        // element *= 2;
    }
}, 1000000)
execution_time(() => {
    for (let i = 0; i < array.length; i++) {
        // array[i] *= 2;
    }
}, 1000000);

function isType(value, type) {
    if (value === null || value === undefined) return value === type;
    if (value === Object.prototype) return type === Object;
    let prototype;
    try {
        prototype = Object.getPrototypeOf(value);
    } catch {
        prototype = value.__proto__;
    }
    return prototype === type.prototype;
}

function getType(value) {
    if (value === null || value === undefined) return value;
    if (value === Object.prototype) return Object;
    let prototype;
    try {
        prototype = Object.getPrototypeOf(value);
    } catch {
        prototype = value.__proto__;
    }
    return prototype.constructor;
}

console.log(isType(1, Number));  // true
console.log(isType("Never gonna give you up", String));  // true
console.log(isType(true, Boolean));  // true
console.log(isType(null, null));  // true
console.log(isType(undefined, undefined));  // true
console.log(isType(1n, BigInt));  // true
console.log(isType(Symbol(), Symbol));  // true

console.log(isType(42, Boolean));  // false
console.log(isType("Never gonna let you down", Number));  // false
console.log(isType(false, String));  // false
console.log(isType(null, BigInt));  // false
console.log(isType(undefined, null));  // false
console.log(isType(1n, Array));  // false
console.log(isType(Symbol(), Date));  // false

console.log(isType([1, 2, 3], Array));  // true
console.log(isType({title: "Never Gonna Give You Up", artist: "Rick Astley"}, Object));  // true
console.log(isType(new Date(1966, 1, 6), Date));  // true
console.log(isType(new SpeechSynthesisUtterance("Never gonna run around and desert you"), SpeechSynthesisUtterance));  // true
console.log(isType(()=>"Never gonna make you cry", Function));  // true

console.log(isType([1, 2, 3], Object));  // false
console.log(isType({title: "Never Gonna Give You Up", artist: "Rick Astley"}, Date));  // false
console.log(isType(new SpeechSynthesisUtterance("Never gonna say goodbye"), Array));  // false
console.log(isType(()=>"Never gonna tell a lie and hurt you", SpeechSynthesisUtterance));  // false
console.log(isType(new Date(1966, 1, 6), Function));  // false

function Kitten(name, species, weight) {
    this.name = name;
    this.species = species;
    this.weight = weight;
}

function Puppy(name, species, weight) {
    this.name = name;
    this.species = species;
    this.weight = weight;
}

let mimi = new Kitten("Mimi", "Cheshire Cat", 3);
console.log(isType(mimi, Kitten));  // true
console.log(isType(mimi, Puppy));  // false


console.log(getType(1));  // Number
console.log(getType("Never gonna give you up"));  // String
console.log(getType(true));  // Boolean
console.log(getType(null));  // null
console.log(getType(undefined));  // undefined
console.log(getType(1n));  // BigInt
console.log(getType(Symbol()));  // Symbol

console.log(getType([1, 2, 3]));  // Array
console.log(getType({title: "Never Gonna Give You Up", artist: "Rick Astley"}));  // Object
console.log(getType(new Date(1966, 1, 6)));  // Date
console.log(getType(new SpeechSynthesisUtterance("Never gonna run around and desert you")));  // SpeechSynthesisUtterance
console.log(getType(()=>"Never gonna make you cry"));  // Function


function Kitten(name, species, weight) {
    this.name = name;
    this.species = species;
    this.weight = weight;
}

function Puppy(name, species, weight) {
    this.name = name;
    this.species = species;
    this.weight = weight;
}

let mimi = new Kitten("Mimi", "Cheshire Cat", 3);
console.log(isType(mimi))  // Kitten