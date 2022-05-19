function Calculator() {
    this.read = function(x, y) {
        Object.assign(this, {x, y});
    }
    this.sum = function() {
        return this.x + this.y;
    }
    this.mul = function() {
        return this.x * this.y;
    }
}


function Ladder() {
    this.steps = 0;
    this.up = function() {
        this.steps++;
        return this;
    }
    this.down = function() {
        this.steps--;
        return this;
    }
    this.showStep = function() {
        alert(this.steps);
        return this;
    }
}



