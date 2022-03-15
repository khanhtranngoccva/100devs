console.log("loaded")

let monitor = document.querySelector(".monitor h3");

//monitor.textContent = "oti nanai oti nanaioti nanai oti nanai oti nanai";



let FNC_button = document.querySelectorAll(".number button");


function Buttons() {
    FNC_button.forEach(MyBut=>{MyBut.addEventListener('click', ()=>{
        let number = MyBut.getElementsByClassName("numValue")[0].textContent;
        monitor.textContent += number;
    })
    })
}

Buttons();