musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");

musketeers.forEach((x) => console.log(x));


musketeers.splice(musketeers.indexOf("Aramis"), 1);

for (let m of musketeers) {
    console.log(m);
}

const values = [3, 11, 7, 2, 9, 10];
console.log(values.reduce((x, y) => x + y, 0))
console.log(Math.max(...values));

const words = [];
while (true) {
    const word = prompt();
    if (word === "stop") {
        break;
    } else {
        words.push(word);
    }
}

console.log(words);