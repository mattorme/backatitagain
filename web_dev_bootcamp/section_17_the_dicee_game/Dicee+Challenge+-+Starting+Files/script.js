var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var dice1 = "./images/dice" + randomNumber1 + ".png";
var dice2 = "./images/dice" + randomNumber2 + ".png";

document.getElementById("img1").src = dice1;
document.getElementById("img2").src = dice2;
