HTMLElement.prototype.hide = function () {
    this.style.display = "none";
}

HTMLElement.prototype.show = function() {
    this.style.display = "block"
}

const result_banner = document.querySelector("#result");

const SPECIAL_CARDS = {
    ace: 1,
    jack: 11,
    queen: 12,
    king: 13,
}


async function newGame() {
    document.querySelector("#player1").hide();
    document.querySelector("#player2").hide();
    await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(response => response.json()).then(json => {
        if (json.success === true) {
            const result = json['deck_id'];
            Game.deckId = result;
            return result;
        } else {
            return null;
        }
    });
}

async function drawCards(drawCount = 2) {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${Game.deckId}/draw/?count=${drawCount}`);
    const json = await response.json();
    const cards = json["cards"];
    const [card1, card2] = cards;
    document.querySelector("#player1").show();
    document.querySelector("#player2").show();
    document.querySelector("#player1").src = card1.image;
    document.querySelector("#player2").src = card2.image;
    const score1 = SPECIAL_CARDS[card1.value.toString().toLowerCase()] ?? Number(card1.value);
    const score2 = SPECIAL_CARDS[card2.value.toString().toLowerCase()] ?? Number(card2.value);
    console.log(score1, score2)
    if (score1 < score2) {
        result_banner.innerText = "Player 2 wins!";
    } else if (score1 > score2) {
        result_banner.innerText = "Player 1 wins!";
    } else {
        result_banner.innerText = "TIE!";
    }
}

class Game {
    static get deckId() {
        return JSON.parse(localStorage.getItem("gameId"));
    }

    static set deckId(data) {
        localStorage.setItem("gameId", JSON.stringify(data));
    }
}


async function mainScript() {
    document.querySelector("#player1").hide();
    document.querySelector("#player2").hide();
    Game.deckId ?? await newGame();
    document.querySelector("#newGame").addEventListener("click", newGame);
    document.querySelector("#dealCards").addEventListener("click", () => drawCards(2));
}

mainScript();