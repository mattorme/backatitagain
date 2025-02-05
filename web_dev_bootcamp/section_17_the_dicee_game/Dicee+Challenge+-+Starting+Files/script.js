var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var dice1 = "./images/dice" + randomNumber1 + ".png";
var dice2 = "./images/dice" + randomNumber2 + ".png";

var winner = document.getElementById("winner");

document.getElementById("img1").src = dice1;
document.getElementById("img2").src = dice2;

if (randomNumber1 > randomNumber2) {
  winner.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  winner.innerHTML = "Player 2 Wins! 🚩";
} else {
  winner.innerHTML = "Draw!";
}
