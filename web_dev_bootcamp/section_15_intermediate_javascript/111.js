function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆
  var fibonacciArray = [];

  //Write your code here:
  for (var i = 0; i < n; i++) {
    if (fibonacciArray.length == 0) {
      fibonacciArray.push(0);
    } else if (fibonacciArray.length == 1) {
      fibonacciArray.push(1);
    } else {
      var firstNum = fibonacciArray.length - 1;
      var secondNum = fibonacciArray.length - 2;
      var total = fibonacciArray[firstNum] + fibonacciArray[secondNum];
      fibonacciArray.push(total);
    }
  }

  return fibonacciArray;

  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(20));
