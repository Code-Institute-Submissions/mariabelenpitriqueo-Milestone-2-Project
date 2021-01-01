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
            "<div class='card' + data-valor= " + 
            element +
            ">" +
    "<div class='card__content'>" +
    element +
    "</div>" +
     "</div>"
     ;

    table.appendChild(card);
    });

}

function show (){
    var showed;

    var allshowed = document.querySelectorAll(".show");

    if (allshowed.length > 1){
        return;
    }


    this.classList.add("show");

    showed = document.querySelectorAll(".show");
    if (showed.length < 2){
        return;
    }
    if (showed[0].dataset.valor === showed[1].dataset.valor) {
        console.log("success");
    } else {
        console.log("error");
    }

}
dealcards();

document.querySelectorAll(".card").forEach(function(element) {
    element.addEventListener("click", show);


    }
)


