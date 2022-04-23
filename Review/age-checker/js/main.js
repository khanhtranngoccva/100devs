//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
function grab_result(age) {
    if (age <16) {
        return "You can't drive";
    } else if (age < 18) {
        return "You can't hate from outside the club";
    } else if (age < 21) {
        return "You can't drink (wine)";
    } else if (age < 25) {
        return "You can't rent cars cheaply";
    } else if (age < 30) {
        return "You can't rent fancy cars cheaply";
    } else {
        return "There's nothing to look forward to";
    }

}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector("h1").addEventListener("click", function() {
    document.querySelector("p").innerText = grab_result(Number(document.querySelector("input").value))
})