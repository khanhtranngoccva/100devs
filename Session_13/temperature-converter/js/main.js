//Write your pseudo code first!
"use strict";
(function() {
    document.querySelector("#convert").addEventListener("click", function() {
       let result = convert_celsius_to_fahrenheit(parseInt(document.querySelector("#sel").value));
       document.querySelector("#final").innerText = result;
    });
    
    function convert_celsius_to_fahrenheit(celsius) {
        return celsius * 1.8 + 32;
    }
}());