/*
Mark Ortega-Ponce
2/28/23
CS311
*/

// Define veggie objects
var veggies = [
    {   name: "Apple",
        servingSize: "1 medium (182g)",
        calories: 95,
        origin: "Kazakhstan, in central Asia east of the Caspian Seaor",
        imageLink: "images/apple.jpg"
    },
    {
        name: "Orange",
        servingSize: "1 small (96g)",
        calories: 45,
        origin: "Tropical Regions of Asia",
        imageLink: "images/orange.jpg"
    },
    {
        name: "Rasberries",
        servingSize: "1 cup (123g)",
        calories: 65,
        origin: "Indigenous to Asia Mino",
        imageLink: "images/rasberries.jpg"
    },
    {
        name: "Strawberrys",
        servingSize: "1 cup (123g)",
        calories: 100,
        origin: "Northern Europe",
        imageLink: "images/strawberry.jpg"
    }
]

function main(){
    addListeners();
}
/* Wait for dom to be loaded */
window.addEventListener( "DOMContentLoaded", main);

/* Add listeners to side nav divs */
function addListeners(){

    let divItems = document.getElementsByClassName("item");
    let homeItem = document.getElementById("homeLink");
    /* Add home function to home only */
    homeItem.addEventListener("click", home);

    /* Add listeners to get veggie/fruit information */
    for (let i = 0; i < divItems.length; i++){
        divItems[i].addEventListener("click", handlerFunction);
        divItems[i].classList.add("clicked");
        /* toggle off class that was addded */
        divItems[i].classList.toggle("clicked");
        divItems[i].addEventListener("click", toggleClass);
    }
    /* Remove veggie/fruit information from home link */
    homeItem.removeEventListener("click",handlerFunction);
}
/* Function to toggle background color on div items in side nav */
function toggleClass(){
    let toggled = document.getElementsByClassName("clicked");
    console.log(toggled);
    for (let i = 0; i < toggled.length; i++){
        toggled[i].classList.toggle("clicked");
    }
    this.classList.toggle("clicked");
}
/* Get veggie/fruit information from clicked div in side nav */
function handlerFunction(){
    let itemClickedText = this.textContent;
    let vegObject;

    for(veg of veggies){
        if (veg.name == itemClickedText){
            vegObject = veg;
            break;
        }
    }
    let mainContent = document.getElementById("mainContent");
    let htmlString = "<h2>" + itemClickedText + "</h2>";
    htmlString += "<p>Serving Size: " + vegObject.servingSize + "</p>";
    htmlString += "<p>Calories: " + vegObject.calories + "</p>";
    htmlString += "<p>Origin: " + vegObject.origin + "</p>";
    htmlString += "<p><img src=" + vegObject.imageLink + " alt='Picture of " + itemClickedText + "'></p>";
    mainContent.innerHTML = htmlString;
}
/* Add home html when home is clicked */
function home(){
    let mainContent = document.getElementById("mainContent");
    let htmlString = "There are many variations of passages";
    htmlString += "of Lorem Ipsum available, but the majority have suffered alteration";
    htmlString += "in some form, by injected humour, or randomised words which don't ";
    htmlString += "look even slightly believable. If you are going to use a passage of"; 
    htmlString += "Lorem Ipsum, you need to be sure there isn't anything embarrassing ";
    htmlString += "hidden in the middle of text. All the Lorem Ipsum generators on the ";
    htmlString += "Internet tend to repeat predefined chunks as necessary, making this ";
    htmlString += "the first true generator on the Internet. It uses a dictionary of over ";
    htmlString += "200 Latin words, combined with a handful of model sentence structures, ";
    htmlString += "to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum";
    htmlString += "is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    htmlString += "<br>"
    htmlString += "<br>";
    htmlString += "<p>Logo Credits and Pictures</p>"
    htmlString += "<div><a href='https://www.vecteezy.com/'>Vecteezy</a></div>"
    htmlString += "<div><a href='https://www.pexels.com/'>Pexels</a></div>"
    mainContent.innerHTML = htmlString;
}