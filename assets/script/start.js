

     /*GLOBAL VARIABLES*/ 
     let cardsgroup = ["🦸", "️👾" ,"👽", "⚡", "💥", "⭐", "🎯", "💣"];
     let allcards = cardsgroup.concat(cardsgroup);
     const modal = document.getElementById('modal');


     /*DEALS & MIX */ 

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

        /*SHOW & COMPARE*/ 

        function show (){
        let showed;
    

        let allshowed = document.querySelectorAll(".uncovered:not(.accurate)");

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
    }  else {
       error(cardsToCompare);
    }
}

      let cantmerits = 0;
      let canterrors = 0;


      /*SUCCESS & ERROR*/ 

      function success(theCards) {
      theCards.forEach(function(element) {
      element.classList.add("accurate");
  });
      let merits = document.querySelector("#counter-merits");
      cantmerits++;
      
    
      merits.innerHTML = cantmerits;
      if (cantmerits === cardsgroup.length){
          modal.style.display = "flex";
          modal.querySelector('.modal-text').textContent = "Congrats!!! You win⚡⚡⚡";
          
      }

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

  }, 1000);


     let errors = document.querySelector("#counter-errors");
     canterrors++;
     errors.innerHTML = canterrors;

 }



     /*-START -*/


     dealcards();

     document.querySelectorAll(".card").forEach(function(element) {
     element.addEventListener("click", show);

    });
 
    

     /* COUNTER */
     
     function startClock() {
    
     let seconds = 35;
     let minutes = 0;
     let secondsText;
     let minutesText;
     let clock;
  
     function actualizaContador() {
      

     seconds--;
     if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    
     if (minutes < 0) {
      seconds = 0;
      minutes = 0;
      clearInterval(clock);
      modal.style.display = "flex";
      
    }
     secondsText = seconds;
     minutesText = minutes;
     if (seconds < 10) {
      secondsText = "0" + seconds;
    }
     if (minutes < 10) {
      minutesText = "0" + minutes;
    }

     document.querySelector("#minutes").innerText = minutesText;
     document.querySelector("#seconds").innerText = secondsText;
  }
    clock = setInterval(actualizaContador, 1200);
  
 }


