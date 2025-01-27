var output = [];
var x = 1;

function fizzBuzz() {
  if (x % 3 == 0 && x % 5 != 0) {
    output.push("fizz");
  } else if (x % 3 != 0 && x % 5 == 0) {
    output.push("buzz");
  } else if (x % 3 == 0 && x % 5 == 0) {
    output.push("fizzbuzz");
  } else {
    output.push(x);
  }
  x++;
  return output;
}

console.log(fizzBuzz());
