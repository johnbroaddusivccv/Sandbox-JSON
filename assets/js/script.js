// I had to pause AdBlock to pull from the JSON File
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info")
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
// DATA REQUEST JSON ================================================================
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) { 
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    } else {
        console.log("we connected to the server but there is an error");
    }

    };

    ourRequest.onerror = function() {
        console.log("connection error");
    };
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    var htmlString = "";
    
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
                
            }
        }

        htmlString += ' and dislikes ';

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
                
            }
        }
        htmlString += '.</p>'
        
    }
    
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}



// we need to repspond to blue button click events
// we need to addd new HTML to the page

