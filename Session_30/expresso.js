class EspressoMachine {
    constructor(color="#000", price=400) {
        this.temperature = 20;
        this.color = color;
        this.turnedOn = false;
        this.spinning = false;
        this.price = price;
    }

    turnOn() {
        this.turnedOn = true;
    }

    turnOff() {
        this.turnedOn = false;
        this.spinning = false;
    }

    changeTemperature(temperature) {
        this.temperature += temperature;
    }

    async stirCoffee(time) {
        this.spinning = true;
        await delay(20);
        this.spinning = false;
    }

    pourCoffee() {
        console.log("Pouring");
    }
}

function delay(secs) {
    return new Promise(resolve => {
        setTimeout(resolve, secs * 1000);
    });
}

async function mainScript() {
    const espressoMachine = new EspressoMachine();
    await espressoMachine.stirCoffee();
}

mainScript();