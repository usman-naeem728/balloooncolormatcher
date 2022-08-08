function start() {
    document.getElementById("ended").style.display = "none"
    document.getElementById("start").style.display = 'none';
    document.getElementsByTagName("div")[0].removeAttribute("class");
    const startingMinutes = 1;
    let time = startingMinutes * 60;
  
    const countdownEl = document.getElementById('countdown');
  
    var myInterval = setInterval(updateCountdown, 1000);
  
    function updateCountdown() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      if (seconds < 10) {
        seconds = "0" + time % 60
      }
  
      countdownEl.innerHTML = `${minutes}: ${seconds}`;
      if (time == 0) {
        clearInterval(myInterval)
        document.getElementById("ended").style.display = "flex"
        document.getElementById("blur").setAttribute("class", "blur");
        var score = document.getElementById("yScore")
        score.innerHTML  = document.getElementById("point").innerHTML
        // point = score
        console.log(score)
      } else {
        time--;
  
      }
    }
  
    var i = 0;
  
   
  }
