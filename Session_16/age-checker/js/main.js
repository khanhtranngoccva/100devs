//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
function compare_age(age) {
    let result = [];
    if (age < 16) {
        result.push("Oof! You can't drive!");
    }
    if (age < 18) {
        result.push("Oof! Nightclub? You can't get in!");
    }
    if (age < 21) {
        result.push("Yeah, you're too young to drink alcohol.");
    }
    if (age < 25) {
        result.push("You can't rent cars cheaply!");
    }
    if (age < 30) {
        result.push("Fancy cars! No :P");
    }
    if (age >= 30) {
        result.push("What are you looking forward to? You can do anything now.");
    }
    return result.join('\n');
}

//--- Harder
//On click of the h1
document.querySelector("h1").addEventListener("click", function () {
    const value = Number(document.querySelector("#danceDanceRevolution").value);
    document.querySelector("p").innerText = compare_age(value);
})
//Take the value from the input
//Place the result of the conditional in the paragraph
