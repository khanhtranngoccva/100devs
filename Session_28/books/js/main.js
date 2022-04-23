//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    let choice = document.querySelector('input').value;
    if (!choice) choice = "9780980200447";
    console.log(choice);
    const url = `https://www.openlibrary.org/isbn/${choice}`;
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}

[ 'msg ', '\'', '(5+1)/2 = \\', '\'', ', a' ]

