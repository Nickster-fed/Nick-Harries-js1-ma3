
// Getting DOM elements

const resContainer = document.querySelector(".results");
const err = document.querySelector(".displayError");





const taskUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"



//Button onclick

const button = document.querySelector(".btn");

button.addEventListener("click", async function() {
    try{
        resContainer.innerHTML = "Loading...";

        const response = await fetch(taskUrl);

        const results = await response.json();

        const facts = results.results;


        resContainer.innerHTML = "";
    // Loop over 20 elements in array 

        for(let i = 0; i < facts.length; i++) {
            
            //Stopping at 8 results

            if (i === 8) {
                break
            };
            // Adding to container

            resContainer.innerHTML += `<div class="done">
            <div class="cont name">Title Name: <br>${facts[i].name}</div>
            <div class="cont rating">Rating: <br>${facts[i].rating}</div>
            <div class="cont tags">Number of tags: <br>${facts[i].tags.length}</div>
            </div>`
        }
    } catch (error) {
            err.innerHTML = `<div class="err">You have called a faulty API</div>`
    }
});