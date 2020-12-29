var cardsgroup = ["🦸🏻‍♀️", "🦸🏻‍♂️", "🦹🏼‍♂️" ,"⚡", "💥", "⭐", "🎯", "💣", "🧨", "🛡️"];

var allcards = cardsgroup.concat(cardsgroup);

function shuffledcards() {
var result;
result = allcards.sort( 
    function() {
 return 0.5- Math.random()
    }
)
return (result);
}


function dealcards() {
    var table = document.querySelector("#table");
    var mixedcards = shuffledcards();
    table.innerHTML = "";

    mixedcards.forEach(function(element) {
        var card = document.createElement("div");

        card.innerHTML = 
            "<div class='card'>" +
    "<div class='card__content'>" +
    element +
    "</div>" +
     "</div>"
     ;

    table.appendChild(card);
    });

}

function show (){
    this.classList.add("show");
}
dealcards();

document.querySelectorAll(".card").forEach(function(element) {
    element.addEventListener("click", show);


    }
)


