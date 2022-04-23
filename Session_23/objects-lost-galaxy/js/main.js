//Create a dog object that has four properties and three methods
const dog = {};

dog.name = "Spike";
dog.species = "Terrier";
dog.color = "white";
dog.age = 2;

dog.bark = function() {
    console.log(`${dog.name} says WOOF!`);
}

dog.run = function () {
    console.log("Pant pant");
}

dog.sleep = function () {
    console.log("zzzzz");
}

dog.jump = function() {
    console.log("BLAST OFF!");
}