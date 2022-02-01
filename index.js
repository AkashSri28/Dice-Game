var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
changeDice(".img1", randomNumber1);
changeDice(".img2", randomNumber2);
if(randomNumber1 > randomNumber2){
  document.querySelector(".container h1").textContent = "🚩 Player 1 wins";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector(".container h1").textContent = "Player 2 wins 🚩";
}
else{
  document.querySelector(".container h1").textContent = "Draw";
}
function changeDice(img, randomNumber){
  if(randomNumber === 1){
    document.querySelector(img).setAttribute("src", "images/dice1.png");
  }
  else if(randomNumber === 2){
    document.querySelector(img).setAttribute("src", "images/dice2.png");
  }
  else if(randomNumber === 3){
    document.querySelector(img).setAttribute("src", "images/dice3.png");
  }
  else if(randomNumber === 4){
    document.querySelector(img).setAttribute("src", "images/dice4.png");
  }
  else if(randomNumber === 5){
    document.querySelector(img).setAttribute("src", "images/dice5.png");
  }
  else{
    document.querySelector(img).setAttribute("src", "images/dice6.png");
  }
}
