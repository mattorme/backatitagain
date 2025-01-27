arrayOfNames = ["Matthew", "Adam", "Stephen", "Lisa"];

function whosPaying(names) {
  /******Don't change the code above*******/

  //Write your code here.
  var arrayPosition = Math.round(Math.random() * names.length);

  return names[arrayPosition] + " is going to buy lunch today!";

  /******Don't change the code below*******/
}
