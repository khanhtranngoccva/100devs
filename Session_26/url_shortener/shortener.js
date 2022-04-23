async function shorten(url) {
    const complete_url = "https://api.1pt.co/addURL?" + new URLSearchParams({long: url}).toString();
    return "1pt.co/" + (await(await fetch(complete_url)).json()).short;
}

async function get_shortened_link() {
    const input = document.querySelector("input").value;
    const shortened_url = await shorten(input);
    document.querySelector("span").innerText = shortened_url;
}

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    get_shortened_link();
})