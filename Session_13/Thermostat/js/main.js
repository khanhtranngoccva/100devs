(function () {
    const THERMOMETER_RANGE = document.querySelector(".thermometer");
    const FAHRENHEIT_COUNTER = document.querySelector("#fahrenheit");
    const CELSIUS_COUNTER = document.querySelector("#celsius")
    const PUDDING = document.querySelector(".pudding");
    const SPEECHES = ["It's cold", "Better now!", "Hot hot hot hot hot hot!", "Ouch."].map(sound => new SpeechSynthesisUtterance(sound));
    let cur_state;
    console.log(THERMOMETER_RANGE);
    let temperature;

    function change_temperature(new_temp) {
        const [THERMOMETER_MIN, THERMOMETER_MAX] = [parseInt(THERMOMETER_RANGE.min), parseInt(THERMOMETER_RANGE.max)];
        const temperature_raw_ratio = (new_temp - THERMOMETER_MIN) / (THERMOMETER_MAX - THERMOMETER_MIN);
        const temperature_ratio = -100 + (0 <= temperature_raw_ratio <= 1 ? temperature_raw_ratio : temperature_raw_ratio > 1 ? 1 : 0) * 100 + "%";
        document.querySelector(".thermometer_bg").style.left = temperature_ratio;
        temperature = new_temp;
        CELSIUS_COUNTER.innerText = new_temp;
        FAHRENHEIT_COUNTER.innerText = celsius_to_fahrenheit(new_temp);
    }

    function celsius_to_fahrenheit(celsius) {
        return celsius * 9 / 5 + 32;
    }

    function change_pudding() {
        if (temperature >= 60) {
            change_speech(3);
            PUDDING.classList.add("melt");
            PUDDING.classList.remove("slowdown");
            PUDDING.classList.remove("speedup");
        } else if (temperature >= 30) {
            change_speech(2);
            PUDDING.classList.add("slowdown");
            PUDDING.classList.remove("speedup");
        } else if (temperature >= 10) {
            change_speech(1);
            PUDDING.classList.remove("slowdown");
            PUDDING.classList.remove("speedup");
        } else {
            change_speech(0);
            PUDDING.classList.remove("slowdown");
            PUDDING.classList.add("speedup");
        }
    }

    function change_speech(new_state) {
        if (new_state !== cur_state) {
            cur_state = new_state;
            if (!PUDDING.classList.contains("melt")) {
                speechSynthesis.speak(SPEECHES[new_state]);
            }
        }
    }

    THERMOMETER_RANGE.addEventListener("input", function () {
        change_temperature(parseInt(this.value));
        change_pudding();
    })
    THERMOMETER_RANGE.value = 25;
    change_temperature(THERMOMETER_RANGE.value);

})();