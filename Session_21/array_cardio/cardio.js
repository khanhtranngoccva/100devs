// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const born_1500s = inventors.filter((inventor) => {
    return inventor.year >= 1500 && inventor.year < 1600;
})
console.log(born_1500s);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventor_full_names = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
console.log(inventor_full_names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sorted_by_birthdate = inventors.sort((inventor1, inventor2) => inventor2.year - inventor1.year);
console.log(sorted_by_birthdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const total_years = inventors.reduce((accumulator, inventor)=> accumulator + inventor.passed - inventor.year, 0);
console.log(total_years);

// 5. Sort the inventors by years lived
const sorted_by_longevity = inventors.sort((inventor1, inventor2) => (inventor2.passed - inventor2.year) - (inventor1.passed - inventor1.year));
console.log(sorted_by_longevity);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name

// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// async function fetch_text(link, ...args) {
//     return (await fetch(link, ...args)).text();
// }
//
// async function get_boulevards() {
//     const data = fetch_text("https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris", {"Access-Control-Allow-Origin": "*"});
//     console.log(data);
// }
// get_boulevards()

// 7. sort Exercise
// Sort the people alphabetically by last name
const sorted_by_last_name = people.sort((previous, next) => {
    return next.split(", ") < previous.split(", ") ? 1 : -1; 
});

console.log(sorted_by_last_name)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const vehicle_counter = data.reduce((counter, item) => {
    counter[item]??=0;
    counter[item]++;
    return counter;
}, {});

function Counter(iterable) {
    Array.from(iterable).reduce((counter, item) => {
        counter[item] ??= 0;
        counter[item] ++;
        return counter;
    }, this);
}

console.log(new Counter("1232398098413483748109745"));
// console.log(van)
// console.log(vehicle_counter);


let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23