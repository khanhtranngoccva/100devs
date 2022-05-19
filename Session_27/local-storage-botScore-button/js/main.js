//Create a button that adds 1 to a botScore stored in localStorage 

Object.defineProperty(window, "botScore", {
    get() {
        return JSON.parse(localStorage.getItem("botScore") ?? 0);
    },
    set(data) {
        return localStorage.setItem("botScore", JSON.stringify(data));
    }
});

function update() {
    document.querySelector("h2").innerText = botScore;
}

document.querySelector("button").addEventListener("click", () => {
    botScore++;
    update();
});

update();
