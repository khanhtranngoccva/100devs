//Create a function that grabs the number of snacks from the input and tells you to stop that many times
const DOCUMENT_INPUT = document.querySelector("input");
const STOPS = document.querySelector("#stops");
function grab_input() {
    const snack_count = Number(DOCUMENT_INPUT.value);
    STOPS.innerText = "Stop eating snacks!\n".repeat(snack_count);
}
document.querySelector("#help").onclick = grab_input;