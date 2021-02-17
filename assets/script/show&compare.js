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