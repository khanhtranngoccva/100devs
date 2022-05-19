//Example fetch using pokemonapi.co

// NASA API key: sn7oGmtR1zo6HXBGJfk3b12dyhh10zsNvWBbjNDK

document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
    const date = document.querySelector('input').value;
    const url = 'https://api.nasa.gov/planetary/apod?' + new URLSearchParams({
        api_key: "sn7oGmtR1zo6HXBGJfk3b12dyhh10zsNvWBbjNDK",
        date,
    }).toString();

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);
            if (data.media_type === "video") {
                document.querySelector("iframe").src = data.url;
            } else {
                document.querySelector("img").src = data.hdurl;
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}