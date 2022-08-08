let arr = [
  "red", "orange", "green", "yellow", "chocolate", "pink", "purple", "greenyellow", "lightblue", "brown", "aqua", "bisque"
]
// getting all balloons and putting random colours
for (i = 1; i <= 21; i++) {
  let color = arr[Math.floor(Math.random() * 12)]
  // console.log(color)
  var bal = document.getElementById('bal' + i);
  bal.style.background = color;
}

// getting given color option and puta a random colour init
let color = arr[Math.floor(Math.random() * 12)]
let putColor = document.getElementById("color")
putColor.style.backgroundColor = color;

// checking color ,that is user choose a correct color

let putPoints = 0;
function chack(num) {
  let pp = false;
  let lifeC = false;
  let point = document.getElementById("point");
  let color2 = arr[Math.floor(Math.random() * 12)]

  let col = document.getElementById("bal" + num)
  let balCol = col.style.background
  if (putColor.style.backgroundColor == balCol) {
    // if user select correct color change the new color
    putColor.style.backgroundColor = color2;
    // remove that balloon
    col.style.display = "none"
    pp = true

  }


  if (pp == true) {

    //now adding points
    putPoints++;
    point.innerText = putPoints
    //creating new balloon

    //generating id for new balloon
    let id = document.getElementById("main").lastElementChild.getAttribute("id").slice(3);
    let mid = Number(id) + 1
    // console.log(mid)

    //now creating balloon
    let div1 = document.createElement("div");
    // setting arttibutes
    div1.setAttribute("class", 'balloon');
    div1.setAttribute("id", 'bal' + mid);
    div1.setAttribute("onClick", 'chack(' + mid + ')')
    // console.log(div1)

    // giving color to it
    let color3 = arr[Math.floor(Math.random() * 12)];
    div1.style.background = color3
    // now put into main div
    document.getElementById("main").appendChild(div1)


  } else {

    let life = document.getElementById("lifeicon");
    life.removeChild(life.lastElementChild)
    if(life.childElementCount == 0){

      lifeC = true;
    }
  }

  if(lifeC == true){
      document.getElementById("blur").setAttribute("class", "blur");
      document.getElementById("ended").style.display = "flex";
      document.getElementById("ended").firstElementChild.innerHTML = "GAME OVER"
      var score = document.getElementById("yScore")
        score.innerHTML  = document.getElementById("point").innerHTML
  }
}

function reload() {
  let color4 = arr[Math.floor(Math.random() * 11)];
  document.getElementById("color").style.background = color4
}
