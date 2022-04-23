// Creates a new object.
function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.introduce = function () {
    console.log(`Hi! I'm ${this.name}`);
}

// Creates
const john = new User("John", 30);

let prototype_clone = (target, source) => {
    for (let key in source) {
        target[key] = source[key];
    }
    return target;
}
console.log(prototype_clone({}, john));
console.log(Object.assign({}, john));
console.log({...john});

