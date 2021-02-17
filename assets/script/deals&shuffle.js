
     /*DEALS & MIX */ 
     /*jshint esversion: 6 */
     
     function shuffledcards() {
     let result;
     result = allcards.sort( 
     function() {
     return 0.5- Math.random();
     }
     );
     return (result);
     }


    function dealcards() {


     let table = document.querySelector("#table");
     let mixedcards = shuffledcards();
     table.innerHTML = "";


     mixedcards.forEach(function(element) {
        let card = document.createElement("div");

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

         document.querySelectorAll(".card").forEach(function(elemento) {
         elemento.addEventListener("click", show);
    
    });

   
         startClock();
  
    }