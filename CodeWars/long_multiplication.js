function multiply(first_number, chunked_number) {
    console.log(first_number, chunked_number)
    let chunked_array = chunked_number.split("").reverse();
    chunked_array.forEach((value, index, array) => {
        const r = multiply_chunk(first_number, value);
        array[index] = r + "0".repeat(index);
    })
    return add(...chunked_array);
}


function multiply_chunk(multi_digit, one_digit) {
    let array_multi = multi_digit.split("").reverse();
    array_multi.forEach((value, index, array) => {
        array[index] = multiply_digit(value, one_digit) + "0".repeat(index);
    })
    return add(...array_multi);
}

function multiply_digit(a, b) {
    return a * b;
}

function add(...numbers) {
    function int_array_reversed(string) {
        return string.split("").reverse().map(x=>Number(x));
    }
    const number_reversed_arrays = numbers.map(x=>int_array_reversed(x));
    const max_digits = Math.max(...number_reversed_arrays.map(x=>x.length));
    const result = [];
    let mem = 0;
    for (let i = 0; i <= max_digits; i++) {
        const digit_addition = number_reversed_arrays.map(number_reversed_array => number_reversed_array[i] !== undefined ? number_reversed_array[i] : 0).reduce((a, b) => a + b) + mem;
        const result_digit = digit_addition % 10;
        mem = Math.floor(digit_addition / 10);
        result[i] = result_digit;
    }
    const final_string = result.reverse().join("").replace(/^0*/, "");
    return final_string !== "" ? final_string : "0";
}