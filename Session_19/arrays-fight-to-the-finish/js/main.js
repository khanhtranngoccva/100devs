(async function() {
    let movies = ["Movie 1", "Movie 2", "Movie 3"];
    const H2 = document.querySelector("h2");

    async function delay(seconds) {
        return await new Promise((resolve => {
            setTimeout(resolve, seconds * 1000);
        }))
    }

    for (let movie of movies) {
        H2.innerText = movie;
        await delay(1);
    }

    //Create an array of movie titles. Loop through the array and each element to the h2.
    let nums = [5, 10, 15];
    nums.forEach((item, index, array)=>{
        array[index] = item + 3;
    })
//Create an array of numbers. Loop through the array and three to each number and replace the old number.


//Find the average of all the numbers from question three
    Array.prototype.mean = function() {
        return this.reduce((a, b)=>a+b) / this.length;
    }
    
    console.log([5, 10, 15].mean());
})();