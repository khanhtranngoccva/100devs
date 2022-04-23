//Create a constructor with 4 properties and 3 methods

function Kitten(name, species, weight=4) {
    this.name = name;
    this.species = species;
    this.weight = 2;
    this.length = 50;
    this.mew = function() {
        speechSynthesis.speak(new SpeechSynthesisUtterance("Meow!"));
    };
    this.eat = function() {
        speechSynthesis.speak(new SpeechSynthesisUtterance("Nom nom nom nom."));
    };
    this.frisbee = function () {
        speechSynthesis.speak(new SpeechSynthesisUtterance("yeeeettttt!"));
    }
}

result = [];
for (let x =0; x < 1000; x++) {
    result.push(new Kitten("Mimi", "tabby", 20));

}
console.log(result);

