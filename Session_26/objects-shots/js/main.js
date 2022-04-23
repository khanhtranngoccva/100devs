//The user will enter a cocktail. Get a cocktail name, photo, and instructions and plce them in the DOM
function get_cocktail(cocktail_name) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail_name}`);
}

async function add_cocktail_to_dom() {
    const query = document.querySelector("input").value;
    const response = await get_cocktail(query);
    const result = await (response).json();
    console.log(result);
}

document.querySelector("button").addEventListener("click", add_cocktail_to_dom);