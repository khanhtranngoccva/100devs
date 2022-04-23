//Get a dog photo from the dog.ceo api and place the photo in the DOM


const get_json = async source => (await fetch(source)).json();

async function get() {
    let result = await get_json("https://dog.ceo/api/breeds/image/random")
    console.log(result);
    return result;
}


(async function () {
    let rs = await get();
    document.querySelector("img").src = rs.message;
})();
