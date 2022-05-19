const aurora = {
    name: "Aurora",
    health: 100,
    strength: 50,
    xp: 10,
    describe() {
        console.log(`${this.name} has ${this.health} HP, ${this.strength} strength and ${this.xp} XP points`)
    }
}

const dog = {
    name: "Fang",
    species: "Terrier",
    size: 75,
    describe() {
        console.log(`${this.name} is a ${this.species.toLowerCase()} dog measuring ${this.size}`);
    },
    seeCat() {
        console.log(`${this.name} barks: ${this.bark()} ${this.bark()}`)
    },
    bark() {
        return "Grrr!"
    }
}

const circle = {
    radius: 20,
    get circumference() {
        return this.radius * 2 * Math.PI;
    },
    get area() {
        return this.radius ** 2 * Math.PI;
    },
    log_area() {
        console.log(`Its area is ${this.area}`);
    },
    log_circumference() {
        console.log(`Its circumference is ${this.circumference}`);
    }
}

circle.log_area();

dog.seeCat()


const account = {

}

account.name = "Alex";
account.balance = 0;
account.credit = function(balance_delta) {
    account.balance += balance_delta;
};
account.describe = function() {
    console.log(`owner: ${this.name}, ${this.balance}`);
};
account.balance += 1204024;
account.describe();