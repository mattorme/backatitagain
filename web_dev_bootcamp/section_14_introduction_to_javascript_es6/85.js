// var myPrompt = prompt("What is your name?");

// if (myPrompt == myPrompt.toUpperCase() || myPrompt == myPrompt.toLowerCase()) {
//   alert(
//     myPrompt.slice(0, 1).toUpperCase() +
//       myPrompt.slice(1, myPrompt.length).toLowerCase()
//   );
// } else {
//   alert(myPrompt);
// }

var myPrompt2 = prompt("What is your name?");
var firstLetter = myPrompt2.slice(0, 1).toUpperCase();
var restOfName = myPrompt2.slice(1, myPrompt2.length).toLowerCase();
var fullName = firstLetter + restOfName;

alert("Hello " + fullName);
