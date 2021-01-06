
/*VARIABLES GLOBALES*/ 
var cardsgroup = ["🦸", "️👾" ,"👽", "⚡", "💥", "⭐", "🎯", "💣", "🧨", "🛡️"];
var allcards = cardsgroup.concat(cardsgroup);




/*BARAJA REPARTE */ 

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


/*DESCUBRIR Y COMPARAR*/ 


function show (){
    var showed;
    var tarjetasPendientes;

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

    tarjetasPendientes= document.querySelectorAll(".card:not(.accurate)");
    if (tarjetasPendientes.length === 0){
       setTimeout(finalizar, 1000);
    } 
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



/*ACIERTO Y ERROR*/ 

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



/*-INICIAR -*/
function iniciar (){

dealcards();

document.querySelector("#feedback").classList.remove("visible");

document.querySelectorAll(".card").forEach(function(element) {
    element.addEventListener("click", show);
    });
    iniciaCronometro();
}

iniciar();


document.querySelector("#reiniciar").addEventListener("click",iniciar);


function finalizar() {
document.querySelector("#feedback").classList.add("visible");
}







/* Contador */
function iniciaCronometro() {
  var segundos = 10;
  var minutos = 0;
  var segundosTexto;
  var minutosTexto;
  var cronometro;

  function actualizaContador() {
    segundos--;
    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }
    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);
      
    }
    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10) {
      segundosTexto = "0" + segundos;
    }
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }
    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;
  }
  cronometro = setInterval(actualizaContador, 1000);
}


