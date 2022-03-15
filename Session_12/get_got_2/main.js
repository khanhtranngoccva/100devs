(function() {
    let admin;
    let name;
    name = "John";
    admin = name;
    console.log(admin);
})();

(function() {
    let ourPlanetName = "Earth";
    let currentUserName = "John";
})();

(function() {
    function someCode() {

    }

    const BIRTHDAY = "18.04.1982";
    const age = someCode(BIRTHDAY);
})();


(function() {
    function checkAge(age) {return age > 18 ? true : confirm("Did parents allow you?");}
    console.log(checkAge(20));

    function checkAge2(age) {return age > 18 || confirm("Did parents allow you?")}
    console.log(checkAge2(30));
})();

(function(){
    function min(...numbers) {
        let lowest_number;
        for (let number of numbers) {
            if (lowest_number === undefined || number < lowest_number) {
                lowest_number = number;
            }
        }

        return lowest_number;
    }

    console.log(min(20, 30, 10, 40));
    
    
    function pow(x, n) {
        return x ** n;
    }
    
    console.log(pow(3, 3));
})();

(function() {
    const ask = (q, y, n) => confirm(q) ? y() : n();
    ask("Do you agree", ()=>alert("You agreed"), ()=>alert("You canceled the execution."))
})();