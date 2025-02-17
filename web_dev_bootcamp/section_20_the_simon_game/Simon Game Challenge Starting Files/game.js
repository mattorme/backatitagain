// Variables
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var btns = document.querySelectorAll(".btn");
var userClickedPattern = [];
var hasGameStarted = false;
var level = 0;
var titleInnerHTML = document.getElementById("level-title");

// Waiting for user click to start game
document.addEventListener("keydown", function () {
  if (hasGameStarted === false) {
    titleInnerHTML.innerHTML = "Level " + level;
    nextSequence();
  }
  hasGameStarted = true;
});

// Main function that generates the sequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  var buttonChosen = document.querySelector("." + randomChosenColour).id;

  gamePattern.push(randomChosenColour);
  addButtonAnimation(buttonChosen);
  playSound(buttonChosen);
  level = level + 1;
  titleInnerHTML.innerHTML = "Level " + level;
}

// Event listeners to look for which button has been pressed
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var buttonId = this.id;
    playSound(buttonId);
    addButtonAnimation(buttonId);
    var userChosenColour = buttonId;
    userClickedPattern.push(userChosenColour);
  });
}

// Function to play the sounds
function playSound(name) {
  switch (name) {
    case "green":
      var btnGreen = new Audio("sounds/green.mp3");
      btnGreen.play();
      break;
    case "red":
      var btnRed = new Audio("sounds/red.mp3");
      btnRed.play();
      break;
    case "yellow":
      var btnYellow = new Audio("sounds/yellow.mp3");
      btnYellow.play();
      break;
    case "blue":
      var btnBlue = new Audio("sounds/blue.mp3");
      btnBlue.play();
      break;
    default:
      break;
  }
}

// Add animation
function addButtonAnimation(currentColour) {
  var activeButton = document.querySelector("." + currentColour);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed"); // Remove the class after 100ms
  }, 100);
}
