"use strict";

Array.prototype.push = function (...items) {
    this.splice(this.length, 0, ...items);
    return this.length;
};

Array.prototype.pop = function () {
    return this.splice(this.length - 1, 1)[0];
};

Array.prototype.unshift = function (...items) {
    this.splice(0, 0, ...items);
    return this.length;
};

Array.prototype.shift = function () {
    return this.splice(0, 1)[0];
};

Array.prototype.slice = function (start, end) {
    start ??= 0;
    end ??= this.length;
    start < 0 && (start += this.length);
    end < 0 && (end += this.length);
    return [...this].splice(start, end - start);
};

Array.prototype.concat = function (...items) {
    const new_array = [...this];
    for (let item of items) {
        if (Array.isArray(item)) {
            new_array.splice(new_array.length, 0, ...item);
        } else {
            new_array.splice(new_array.length, 0, item);
        }
    }
    return new_array
};

Array.prototype.fill = function (value, start, end) {
    start ??= 0;
    end ??= this.length;
    start < 0 && (start += this.length);
    end < 0 && (end += this.length);
    function homogeneous_array(value, count) {
        let array = [];
        for (let i = 0; i < count; i++) {
            array.splice(array.length, 0, value);
        }
        return array;
    }
    this.splice(start, end - start, ...homogeneous_array(value, end - start));
    return this;
};

Array.prototype.every = function(func, thisArg) {
    for (let i = 0; i < this.length; i++ ) {
        const item = this[i];
        if (!func.call(thisArg, item, i, this)) {
            return false;
        }
    }
    return true;
};

Array.prototype.some = function(func, thisArg) {
    for (let i = 0; i < this.length; i++ ) {
        const item = this[i];
        if (func.call(thisArg, item, i, this)) {
            return true;
        }
    }
    return false;
};

Array.prototype.forEach = function(func, thisArg) {
    for (let i = 0; i < this.length; i++ ) {
        const item = this[i];
        func.call(thisArg, item, i, this);
    }
};

Array.prototype.map = function(func, thisArg) {
    let result = [];
    for (let i = 0; i < this.length; i++ ) {
        const item = this[i];
        result.splice(result.length, 0, func.call(thisArg, item, i, this));
    }
    return result;
};

Array.prototype.indexOf = function(item, start=0) {
    for (let i = start; i < this.length; i++) {
        if (item === this[i]) {
            return i;
        }
    }
    return -1;
}

Array.prototype.lastIndexOf = function(item, start) {
    start ??= this.length - 1;
    for (let i = start; i >= 0; i--) {
        if (item === this[i]) {
            return i;
        }
    }
    return -1;
}

Array.prototype.includes = function(item, start) {
    return this.indexOf(item, start) !== -1;
}

Array.prototype.join = function(separator=",") {
    if (this.length === 0) {
        return "";
    } else {
        let result = "";
        for (let i = 0; i < this.length - 1; i++) {
            result += this[i].toString() + separator;
        }
        result += this[this.length - 1].toString();
        return result;
    }
} 


