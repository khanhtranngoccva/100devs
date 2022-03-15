(function() {
    const h1 = document.querySelector("h1");
    const form = document.querySelector("form");
    const select = document.querySelector("#day");
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let day of days) {
        let new_elem = document.createElement("option");
        new_elem.innerText = day;
        new_elem.value = day;
        select.appendChild(new_elem);
    }
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        switch (select.value.toLowerCase()) {
            case "tuesday":
            case "thursday":
                h1.innerText = "Class Day!";
                break;
            case "saturday":
            case "sunday":
                h1.innerText = "Weekend!";
                break;
            default:
                h1.innerText = "Boring!";
                break;
        }
    });
})();