const circle = {
    radius: 1,
    location: {
        x: 20,
        y: 50,
    },
    draw() {
        console.log("Drawing...")
    },
}

const circle2 = {
    radius: 1,
    location: {
        x: 20,
        y: 50,
    },
    draw() {
        console.log("Drawing...")
    },
}


function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("Drawing...");
        }
    }
}

const circle3 = createCircle(3);
circle.draw();

function Circle(radius) {
    console.log(this);
    this.radius = radius;
    let location = {x: 0, y: 0};
    this.draw = function() {
        console.log(location);
        console.log("Drawing...");
    }
}

let da = new Circle(3);
a.draw();