function timeit(callableFunction) {
    const START_TIME = performance.now();
    callableFunction();
    const END_TIME = performance.now();
    return END_TIME - START_TIME + "ms";
}


(function () {
    let x = 3;
    x = 5;
    console.log(x);


// console.log(prompt("What is your name?"))

    let a = 2;
    a -= 1;
    a++;
    let b = 8;
    b += 2;
    const c = a + b * b;
    const d = a * b + b;
    const e = a * (b + b);
    const f = a * b / a;
    const g = b / a * a;
    console.log(a, b, c, d, e, f, g);

    const vat = (x) => 1.206 * x;

    const c2f = (c) => 1.8 * c + 32;

    let n1 = 5;
    let n2 = 3;
    [n1, n2] = [n2, n1]
    console.log(n1, n2);
})();

(function () {
    const wd = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const cap = _ => _[0].toUpperCase() + _.slice(1);
    const nextwd = (_) => wd[wd.indexOf(cap(_)) + 1];
    console.log(nextwd("Saturday"))
}());

(function () {
    const compare = (a, b) => a > b ? "a > b" : a === b ? "a === b" : a < b ? "a < b" : undefined;

    console.log();
})();

(function () {
    function oof(nb1, nb2, nb3) {
        if (nb1 > nb2) {
            nb1 = nb3 * 2;
        } else {
            nb1++;
            if (nb2 > nb3) {
                nb1 += nb3 * 3;
            } else {
                nb1 = 0;
                nb3 = nb3 * 2 + nb2;
            }
        }
        return [nb1, nb2, nb3];
    }

    console.log(oof(2, 4, 0));
})();

(function () {
    const DAYS_OF_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    function dayCountOfMonth(month) {
        try {
            return DAYS_OF_MONTH[month - 1];
        } catch {
            return undefined;
        }
    }

    console.log(dayCountOfMonth(11));
})();

(function () {
    const sayHello = (first, last) => `Hello, ${first} ${last}!`;

    const square = x => x ** 2;

    for (let i = 0; i <= 10; i++) {
        console.log(square(i));
    }

    const min = (...numbers) => {
        let min;
        for (let num of numbers) {
            if (min === undefined || num < min) {
                min = num;
            }
        }
        return min;
    }

    // console.log(min(4, 1, 6, 3));
    function calculator(n1, op, n2) {
        if (op === "+") return n1 + n2;
        if (op === "-") return n1 - n2;
        if (op === "*") return n1 * n2;
        if (op === "/") return n1 / n2;
    }

    const circumference = x => Math.PI * 2 * x;
    const area = x => Math.PI * x ** 2;
})();


(function () {
        console.log(timeit(() => {
            for (let i = 1; i <= 7; i++) {
                console.log("#" * i);
            }
        }));

        for (let i = 1; i <= 100; i++) {
            console.log(i % 15 === 0 ? "FB" : i % 3 === 0 ? "F" : i % 5 === 0 ? "B" : i);
        }
    }
)();


(function () {
    function recursive_even(n) {
        return n === 1 ? false : n === 0 ? true : recursive_even(n - 2);
    }

    console.log(recursive_even(50));
})();
