//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function exp_print(n) {
    let r = []
    for (let i = 1; i <= n; i++) {
        r.push(n);
    }
    return r
}

//Bonus can you make it print '21' 21 times to the dom?
let l;

function glow(level) {
    console.log("changing glow.")
    for (let glow of document.querySelectorAll(".glow")) {
        if (level === 0) {
            glow.style.background = "none";
        } else {
            glow.style.background = "red";
        }
        glow.style.boxShadow = `0 0 ${1.2 * level}px ${1.4*level}px red`
    }
}

async function speak(text) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 2;
    utterance.pitch = 5;
    speechSynthesis.speak(utterance);
    return await new Promise(resolve => {
        const cb = () => {
            utterance.removeEventListener("end", cb);
            resolve(1);
        }
        utterance.addEventListener("end", cb)
    })
}

async function speak_sentence_cb(text, callback) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 2;
    utterance.pitch = 5;
    utterance.addEventListener("boundary", callback);
    speechSynthesis.speak(utterance);
    return await new Promise(resolve => {
        const cb = () => {
            utterance.removeEventListener("end", cb);
            utterance.removeEventListener("boundary", cb);
            resolve(1);
        }
        utterance.addEventListener("end", cb)
    })
}

function increment() {
    glow(Math.floor(l / 2));
    l += 1;
}

// function delay(seconds) {
//     return new Promise(resolve=>{
//         setTimeout(()=>resolve(1), seconds * 1000);
//     })
// }

async function multi_speak() {
    l = 0;
    await speak_sentence_cb(exp_print(21).join(" "), increment)
}

speechSynthesis.cancel();
document.querySelector("#speak").addEventListener("click", multi_speak);
