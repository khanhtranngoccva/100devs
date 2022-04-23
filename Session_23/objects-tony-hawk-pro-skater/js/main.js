//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function SkateBoardingCharacter(name, skateboard, weight, boardSize) {
    this.name = name;
    this.skateboard = skateboard;
    this.weight = weight;
    this.boardSize = boardSize;
    this.noseGrab = function () {
        console.log("Nosegrab");
    };
    this.barrelRoll = function () {
        console.log("Barrel roll");
    };
    this.helicopter = function () {
        console.log("Helicopter");
    }
}

let kareemCampbell = new SkateBoardingCharacter("Kareem", "Lowboard", "80kg", "50x150");