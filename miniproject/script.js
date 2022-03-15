// Use Ctrl + / to comment out lines automatically

// you can find out where someone is at by clicking on their name and "jumping to cursor"
// WRITE IT HERE

let box = document.querySelector('.box');


function win() {
    let win = document.querySelector('.win');
    win.textContent = "YOU WIN DOMINOES PIZZA FOR LIFE";
}


function grid() {
    for (let i = 1; i <= 25; i++) {
        const container = document.querySelector('.container');
        const newDiv = document.createElement('div');
        newDiv.style.border = '1px solid black';
        newDiv.style.background = 'url(https://www.vouchertip.com/mimg/merimg/papajohns.co.uk-b_144858682571.png)';
        newDiv.style.backgroundSize = 'contain';
        newDiv.style.backgroundRepeat = 'no-repeat';
        newDiv.style.height = '100px';
        newDiv.style.width = '100px';
        newDiv.classList.add('newDiv');
        //newDiv.addEventListener("mouseenter", () => {newDiv.style.background = '#000000'})
        container.appendChild(newDiv);
    }
}

function random_hidden_pizza() {
    const pizza_grid = document.querySelectorAll(".newDiv");
    random_item_from_array(pizza_grid).is_true_pizza = true;
}


(function () {
    const container = document.querySelector(".container");
    console.log(container);
    container.addEventListener("click", tries)
})();


grid();
random_hidden_pizza();


function check_if_true_pizza(e) {
    const current_element = e.target;
    if (current_element.classList.contains("newDiv")) {
        return current_element.is_true_pizza ? true : false;
    }
}

let game_over = false;
let numberOfTries = 0;

function tries(e) {
    if (!game_over) {
        let tries = document.querySelector('.triesLeft');
        const result = check_if_true_pizza(e);
        console.log(result);
        if (result === true) {
            win();
            game_over = true;
        } else if (result === false) {
            numberOfTries++;
            if (numberOfTries < 5) {
                console.log(`Tries Left: ${5 - numberOfTries}`);
                tries.innerText = `"Tries Left: ${5 - numberOfTries}"`;
            } else {
                tries.innerText = `"You get to eat Papa Johns for life"`;
                game_over = true;
            }
        }
    }
}

function random_item_from_array(array) {
    const r = random_int(0, array.length);
    console.log(r);
    return array[r];
}

function random_int(min, max, include_end) {
    include_end = include_end ? 1 : 0;
    return Math.floor(min + Math.random() * (max - min) + include_end);
}

