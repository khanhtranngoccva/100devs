// Security build
function SecureStopwatch() {
    let startTime, stopTime, running, duration = 0;
    this.start = function () {
        if (!running) {
            startTime = new Date();
            running = true
        } else {
            throw new Error("Clock already running.")
        }
    }
    this.tellTime = function() {
        console.log(`Current time: ${this.duration}`);
    }
    this.stop = function () {
        if (running) {
            stopTime = new Date();
            running = false;
            this.tellTime();
        } else {
            throw new Error("Clock already stopped.")
        }
    }
    this.reset = function() {
        this.stop();
        running = false;
        stopTime = null;
        startTime = null;
    }

    Object.defineProperty(this, "duration", {
        get() {
            if (running) {
                duration = (new Date() - startTime) / 1000;
            }
            else {
                duration = (stopTime - startTime) / 1000;
            }
            return duration;
        }
    })
}

const a = new SecureStopwatch();
a.start();
console.log(a.duration);
setTimeout(() => a.stop(), 1000)

// Performance build
function PerformantStopwatch() {

}


// let Animal = (function() {
//     let heartRate;  //private variable available in prototype functions
//     function Animal(name) {
//         this.name = name;
//         heartRate = 90;
//         console.log('heart rate: ' + heartRate);
//     };
//     Animal.prototype = {
//         constructor: Animal,
//         doDance: function() {
//             heartRate = 120;
//             console.log(`${this.name}, Heart rate: ${heartRate}`);
//         },
//         getHeartRate() {
//             console.log(`${this.name}, Heart rate: ${heartRate}`);
//         }
//     }
//     return Animal;
// })();


// let dog = new Animal("Dog");
//
// let cat = new Animal("Cat");
// dog.doDance();
// console.log("")
// cat.getHeartRate();