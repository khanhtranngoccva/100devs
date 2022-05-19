String.prototype.capitalize = function() {
    if (this.length === 0) return "";
    return this[0].toUpperCase() + this.slice(1).toLowerCase();
}

class Dog {
    constructor(name, species, size) {
        Object.assign(this, {name, species, size});
    }

    describe() {
        console.log(`${this.name} is a ${this.species} dog measuring ${this.size}`);
    }

    bark() {
        return this.size > 60 ? "Grrr! Grrr!" : "Woof! Woof!";
    }

    cat() {
        console.log(`Look, a cat! ${this.name} barks: ${this.bark()}`);
    }
}

class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0; // XP is always zero for new characters
        this.inventory = {
            gold: 10,
            keys: 1
        }
    }

    // Attack a target
    attack(target) {
        if (this.health > 0) {
            const damage = this.strength;
            console.log(
                `${this.name} attacks ${target.name} and causes ${damage} damage points`
            );
            target.health -= damage;
            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} health points left`);
            } else {
                target.health = 0;
                const bonusXP = 10;
                console.log(
                    `${this
                        .name} eliminated ${target.name} and wins ${bonusXP} experience points, and wins:
${target.inventoryString()}`
                );
                this.xp += bonusXP;
                for (let itemType in target.inventory) {
                    if (target.inventory.hasOwnProperty(itemType)) {
                        this.inventory[itemType] ??= 0;
                        this.inventory[itemType] += target.inventory[itemType];
                    }
                }
                target.inventory = {};
            }
        } else {
            console.log(`${this.name} can't attack (they've been eliminated)`);
        }
    }

    inventoryString() {
        return Object.entries(this.inventory).map(item => item[0].capitalize() + ": " + item[1]).join("\n");
    }

    // Return the character description
    describe() {
        return `${this.name} has ${this.health} health points, ${this
            .strength} as strength and ${this.xp} XP points. Character inventory: 
${this.inventoryString()}`;
    }
}


const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());
console.log(monster.describe());