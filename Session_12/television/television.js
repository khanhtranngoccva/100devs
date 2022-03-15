"use strict";
(function () {
    // const TELEVISION_SCREEN = document.querySelector(".screen");
    const POWER_BUTTON = document.querySelector(".power_off_button");
    const SCREEN_IFRAME = document.querySelector(".iframe_screen");
    const STATIC = document.querySelector(".static");
    const CHANNEL_BUTTONS = document.querySelectorAll(".channel_button");
    const CHANNEL_COUNTER = document.querySelector(".channel_counter");
    let power_state = 0;
    let cur_channel_num = 0;
    let channel_counter_timeout;
    const TWITCH_GET_PARENT_QUERY = "&parent=localhost";
    const CHANNEL_SRCS = [
        "https://player.twitch.tv/?channel=learnwithleon",
        "https://player.twitch.tv/?channel=jackie_codes",
        "https://player.twitch.tv/?channel=rwxrob",
        "https://player.twitch.tv/?channel=ravavyr",
        "https://player.twitch.tv/?channel=danistem",
        "https://player.twitch.tv/?channel=timbeaudet",
        "https://player.twitch.tv/?channel=raphael_luba",
        "https://player.twitch.tv/?channel=one1lion",
        "https://player.twitch.tv/?channel=gmhikaru",
        "https://player.twitch.tv/?channel=leioslabs",

    ].map(x => x + TWITCH_GET_PARENT_QUERY);
    console.log(CHANNEL_SRCS)
    POWER_BUTTON.addEventListener("click", () => {
        power_state = power_state === 0 ? 1 : 0;
        if (power_state === 1) {
            POWER_BUTTON.classList.add("turned_on");
            STATIC.classList.remove("screen_off");
            SCREEN_IFRAME.classList.remove("screen_off");
            change_channel(cur_channel_num);
        } else {
            POWER_BUTTON.classList.remove("turned_on");
            STATIC.classList.add("screen_off");
            SCREEN_IFRAME.classList.add("screen_off");
            SCREEN_IFRAME.src = "";
            CHANNEL_COUNTER.style.display = "none";
        }
    })
    SCREEN_IFRAME.onload = () => {
        STATIC.classList.remove("active");
        channel_counter_timeout = setTimeout(() => {
            CHANNEL_COUNTER.style.display = "none";
        }, 2000);
    }

    function change_channel(channel_number) {
        if (power_state === 1) {
            if (channel_number >= CHANNEL_SRCS.length) {
                channel_number = 0;
            } else if (channel_number < 0) {
                channel_number = CHANNEL_SRCS.length - 1;
            }
            cur_channel_num = channel_number;
            let channel_url = CHANNEL_SRCS[channel_number];
            STATIC.classList.add("active");
            if (channel_url !== undefined) {
                SCREEN_IFRAME.src = channel_url;
            } else {
                SCREEN_IFRAME.src = "";
            }
            clearTimeout(channel_counter_timeout);
            CHANNEL_COUNTER.innerHTML = channel_number;
            CHANNEL_COUNTER.style.display = "block";
            let say_this = new SpeechSynthesisUtterance(`Channel ${cur_channel_num}`);
            speechSynthesis.speak(say_this);
        }
    }

    for (let button of CHANNEL_BUTTONS) {
        button.addEventListener("click", function () {
            change_channel(parseInt(button.innerText));
        });
    }
    document.querySelector(".scroll_button.up").addEventListener("click", () => {
        change_channel(cur_channel_num + 1);
    })
    document.querySelector(".scroll_button.down").addEventListener("click", () => {
        change_channel(cur_channel_num - 1);
    });
    change_channel(cur_channel_num);
    CHANNEL_COUNTER.style.display = "none";
})();