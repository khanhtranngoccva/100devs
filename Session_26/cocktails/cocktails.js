"use strict";

(function() {
    const COCKTAILS_API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
    const WINE_CARDS_LIST = document.querySelector(".wine_cards");
    
    async function search(cocktail_query) {
        const assembled_url = COCKTAILS_API + new URLSearchParams({s: cocktail_query}).toString();
        console.log(assembled_url);
        return await (await fetch(assembled_url)).json();
    }
    
    function create_wine_card(data) {
        const wine_card = document.createElement("li");
        wine_card.classList.add("wine_card");
        wine_card.innerHTML = `<h2 class="wine_name"></h2>
        <img class="wine_thumbnail" src="" alt="">
        <p class="wine_instructions"></p>`;
        wine_card.querySelector(".wine_name").innerText = data.strDrink;
        wine_card.querySelector(".wine_thumbnail").alt = data.strDrink;
        wine_card.querySelector(".wine_thumbnail").src = data.strDrinkThumb;
        wine_card.querySelector(".wine_instructions").innerText = data.strInstructions;
        return wine_card;
    }
    
    async function get_cocktails() {
        const cocktail_query = document.querySelector("#search_query").value;
        const drinks = (await search(cocktail_query)).drinks;
        WINE_CARDS_LIST.innerHTML = "";
        for (let drink of drinks) {
            WINE_CARDS_LIST.append(create_wine_card(drink));
        }
    }
    
    document.querySelector("#search_form").addEventListener("submit", function(e) {
        e.preventDefault();
        get_cocktails();
    });
})();