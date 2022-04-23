//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch);

function createLI(value) {
    const newLI = document.createElement("li");
    newLI.innerText = value;
    return newLI;
}

async function getJSON(url) {
    return (await fetch(url)).json();
}

async function getFetch() {
    const subclassUL = document.querySelector("ul")
    subclassUL.innerHTML = null;
    const choice = document.querySelector('input').value
    const url = `https://www.dnd5eapi.co/api/spells?${new URLSearchParams({
        name: choice
    }).toString()}`;

    const data = await fetch(url)
        .then(res => res.json()) // parse response as JSON
        .catch(err => {
            console.log(`error ${err}`)
        });

    console.log(data);
    if (data.count > 0) {
        const firstResult = await getJSON("https://www.dnd5eapi.co" + data.results[0].url);
        console.log(firstResult);
        const subclasses = document.createDocumentFragment();
        for (let subclass of firstResult.subclasses) {
            subclasses.append(createLI(subclass.name));
        }
        subclassUL.append(subclasses);
    }
}

