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
      document.location.href = "gameover.html";
      
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
