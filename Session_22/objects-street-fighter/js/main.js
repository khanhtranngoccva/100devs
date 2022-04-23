//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Fighter(name, atk, def, hp) {
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
}

Fighter.prototype.jump = function(){};
Fighter.prototype.punch = function (){};
Fighter.prototype.super = function (){};
