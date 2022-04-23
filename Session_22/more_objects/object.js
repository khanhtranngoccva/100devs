user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

Object.prototype.isEmpty = function() {
    return Object.keys(this).length === 0;
}

Object.prototype.shallowCopy = function() {
    const obj = {};
    return Object.assign(obj, this);
}

Object.prototype.isEmpty2 = function() {
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

const a = {};
console.log(a.isEmpty2());
console.log(a.isEmpty());

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let value of Object.values(salaries)) {
    sum += value;
}
console.log(sum);


Object.prototype.multiplyNumeric = function(factor) {
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            if (typeof this[key] === "number") {
                this[key] *= 2;
            }
        }
    }
    return this;
}

console.log({a: 1, b: 2, c: "a"}.multiplyNumeric(2))