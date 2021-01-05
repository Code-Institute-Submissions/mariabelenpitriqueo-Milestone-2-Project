var cardsgroup = ["🦸", "️👾" ,"👽", "⚡", "💥", "⭐", "🎯", "💣", "🧨", "🛡️"];

var allcards = cardsgroup.concat(cardsgroup);

function shuffledcards() {
var result;
result = allcards.sort( 
    function() {
 return 0.5- Math.random();
    }
);
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

    var allshowed = document.querySelectorAll(".uncovered:not(.accurate)");

    if (allshowed.length > 1){
        return;
    }


    this.classList.add("uncovered");

    showed = document.querySelectorAll(".uncovered:not(.accurate)");
    if (showed.length < 2){
        return;
    }
    
     
    compare(showed);
}



function compare(cardsToCompare) {
  if (
    cardsToCompare[0].dataset.valor === cardsToCompare[1].dataset.valor
  ) {
    success(cardsToCompare);
  } else {
    error(cardsToCompare);
  }
}


function success(theCards) {
  theCards.forEach(function(element) {
    element.classList.add("accurate");
  });
}

function error(theCards) {
  theCards.forEach(function(element) {
    element.classList.add("error");
  });

  setTimeout(function() {
    theCards.forEach(function(element) {
      element.classList.remove("uncovered");
      element.classList.remove("error");
    });
  }, 2000);
}


dealcards();

document.querySelectorAll(".card").forEach(function(element) {
    element.addEventListener("click", show);


    }
);
