String.prototype.capitalize = function () {
    if (this.toString() === "") {
        return "";
    }
    return this[0].toUpperCase() + this.slice(1).toLowerCase();
}

String.prototype.camelize = function (delim) {
    const word_array = this.split(delim);
    if (word_array.length === 0) return "";
    const final_array = [word_array[0].toLowerCase(), ...word_array.slice(1).map(x => x.capitalize())];
    return final_array.join("");
}

console.log(" webkit transition".camelize(" "))


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize(""))


console.log("".charAt(0));
console.log(""[0])


Array.prototype.filterRange = function (min, max) {
    return this.filter(x => min <= x && x <= max);
}

Array.prototype.filterRangeInPlace = function (min, max) {
    for (let i = 0; i < this.length; i++) {
        let val = this[i];
        if (val < min || a > max) {
            this.splice(i, 1);
            i--;
        }
    }
}

Array.prototype.numberSort = function (reverse =false) {
    this.sort((x, y) => reverse ? y - x : x - y);
    return this;
}

Array.prototype.copySort = function(sortFunction) {
    return [...this].sort(sortFunction);
}

console.log([5, 3, 8, 1].copySort((x, y)=>y-x));