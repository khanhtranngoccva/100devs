//Create a mouse object that has four properties and three methods
const mouse = {};
mouse.brand = "Apple";
mouse.color = "silver";
mouse.model = "Magic Trackpad 2";
mouse.wireless = true;

mouse.move = function() {
    console.log("swoosh!");
}
console.log(mouse.__proto__ === Object.prototype)