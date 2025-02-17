// Variables
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
let btns = document.querySelectorAll(".btn");

// Main function that generates the sequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  var buttonChosen = document.querySelector("." + randomChosenColour);

  gamePattern.push(randomChosenColour);

  console.log(buttonChosen);
}

// Event listeners to look for which button has been pressed
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mousedown", function () {
    var buttonId = this.id;
    makeSound(buttonId);
    addButtonAnimation(buttonId);
  });

  btns[i].addEventListener("mouseup", function () {
    var buttonId = this.id;
    removeButtonAnimation(buttonId);
  });
}

// Function to play the sounds
function makeSound(btn) {
  switch (btn) {
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
function addButtonAnimation(currentButton) {
  var activeButton = document.querySelector("." + currentButton);
  activeButton.classList.add("pressed");
}

// Remove animation
function removeButtonAnimation(currentButton) {
  var activeButton = document.querySelector("." + currentButton);
  activeButton.classList.remove("pressed");
}
