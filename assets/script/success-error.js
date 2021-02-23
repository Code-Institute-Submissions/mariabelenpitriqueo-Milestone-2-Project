    /*SUCCESS & ERROR*/ 
    /*jshint esversion: 6 */
    
      let cantmerits = 0;
      let canterrors = 0;


      
      function success(theCards) {
      theCards.forEach(function(element) {
      element.classList.add("accurate");
  });
      let merits = document.querySelector("#counter-merits");
      cantmerits++;
      
    
      merits.innerHTML = cantmerits;
      if (cantmerits === cardsgroup.length){
          document.location.href = "youwin.html";
          
          
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



     

