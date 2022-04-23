function range(min, max, step, includes_max) {
    let result = [];
    for (let i = min; includes_max ? i <= max : i < max; step) {
        result.push(i);
    }
    return result;
}

Array.prototype.reverse_polyfill1 = function () {
    const array_length = this.length;
    for (let i = 0; i < Math.ceil(array_length / 2); i++) {
        [this[i], this[array_length - 1 - i]] = [this[array_length - 1 - i], this[i]];
    }
    return this;
}

Array.prototype.reverse_polyfill2 = function () {
    const new_array = [];
    for (let i = this.length - 1; i >= 0; i--) {
        new_array.push(this[i]);
    }
    return new_array;
}

Object.prototype.is_type = function (type) {
    if (this === null || this === undefined) return this === type;
    try {
        return Object.getPrototypeOf(this) === type.prototype;
    } catch {
        return this.__proto__ === type.prototype;
    }
}

// console.log([1, 2, 3, 4, 5, 6, 7].reverse_polyfill2());
function LinkedList(array) {
    this.value = array[0];
    if (1 in array) {
        this.next = new LinkedList(array.slice(1));
    } else {
        this.next = null;
    }
}

LinkedList.prototype.to_array = function () {
    let result = [];
    for (let x = this; x !== null; x = x.next) {
        result.push(x.value);
    }
    return result;
}

LinkedList.prototype.toString = function () {
    return this.to_array().toString();
}

LinkedList.prototype.prepend = function (item) {
    const new_object = {};
    Object.assign(new_object, this);
    const value = this.value;
    this.value = item;
    this.next = new_object;
    return this;
}

const linked_list = new LinkedList([1, 2, 3, 4, 5, 6]);
console.log(linked_list)
const linked_list_from_array = linked_list.to_array();
console.log(linked_list_from_array);
console.log(linked_list.prepend(20).to_array())

function assertDeepEquals(object1, object2) {
    if (object1 === object2) {
        return true;
    } else if (typeof object1 === "object" && typeof object2 === "object") {
        const obj1_keys = Object.keys(object1);
        const obj2_keys = Object.keys(object2);
        if (obj1_keys.length !== obj2_keys.length) {
            // console.log("Different key length.")
            return false;
        }
        for (let obj1_key of obj1_keys) {
            if (!obj2_keys.includes(obj1_key)) {
                return false;
            } else if (!assertDeepEquals(object1[obj1_key], object2[obj1_key])) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}


// console.log(assertDeepEquals([1, 2, 3, 4, 5, [6, 7, [8, 9]]], [1, 2, 3, 4, 5, [6, 7, [8, 9]]]));
// console.table(a)
// console.table(b)
console.log(assertDeepEquals(a, b))

let x = {
    f2() {

    }
}