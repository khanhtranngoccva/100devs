//Create a stopwatch object that has four properties and three methods
const stopwatch = {};
stopwatch.seconds = 20;
stopwatch.minutes = 1;
stopwatch.milliseconds = 20;
stopwatch.brand = "Nike";
stopwatch.shape = "Circle";
stopwatch.addSeconds = function(seconds) {
    const modulo = (this.seconds + seconds) / 60;
    const minutes = (this.seconds + seconds) - modulo;
    this.minutes += minutes;
    this.seconds = modulo;
}
stopwatch.getBrand = function() {
    console.log(this.brand);
}
