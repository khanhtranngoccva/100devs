function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
    }

    this.calculate = function (inputString) {
        let [num1, op, num2] = inputString.split(" ");
        num1 = +num1;
        num2 = +num2;
        return this.methods[op](num1, num2);
    }

    this.addMethod = function (token, func) {
        this.methods[token] = func;
    }
}

let calculator = new Calculator();

console.log(calculator.calculate("1 + -2"));


let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [john, pete, mary];

let names = users.map(user => user.name);

console.log(names)


john = {name: "John", surname: "Smith", id: 1};
pete = {name: "Pete", surname: "Hunt", id: 2};
mary = {name: "Mary", surname: "Key", id: 3};

users = [john, pete, mary];

usersMapped = users.map(user => {
    return {fullName: `${user.name} ${user.surname}`, id: user.id};
});

console.log(usersMapped)


john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(array) {
    return array.sort((x, y)=>x.age - y.age);
}

console.log(sortByAge(arr));

Array.prototype.shuffle = function() {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
}

function broken_reverse(string) {
    return string.split("").reverse().join();
}

function reverse1(string) {
    return [...string].reverse().join("");
}

function reverse2(string) {
    return Array.from(string).reverse().join();
}
