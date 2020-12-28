var cardsgroup = ["🦸🏻‍♀️", "🦸🏻‍♂️", "🦹🏼‍♂️" ,"⚡", "💥", "⭐", "🎯", "💣", "🧨", "🛡️"];

var allcards = cardsgroup.concat(cardsgroup);

function dealcards() {
    var table = document.querySelector("#table");

    table.innerHTML = "";

    allcards.forEach(function(element) {
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
dealcards();



