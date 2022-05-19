//Get a dog photo from the dog.ceo api and place the photo in the DOM
// fetch("https://dog.ceo/api/breeds/image/random").then(response=>response.json()).then(data=>{
//     console.log(data.message);
//     document.querySelector('img').src = data.message;
// }).catch(err=>console.log(`error ${err}`));


async function get_dog_link() {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = response.json();
    return data;
}

async function load_dog_image() {
    let dog_link = await get_dog_link();
    document.querySelector('img').src = dog_link.message;
}

load_dog_image();