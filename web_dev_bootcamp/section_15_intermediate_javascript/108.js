var i = 99;

while (i > 0) {
  if (i == 1) {
    console.log(
      "1 bottle of beer on the wall, 1 bottle of beer. Take it down, pass it around, no more bottles of beer on the wall."
    );
  } else if (i > 0) {
    console.log(
      i +
        " bottles of beer on the wall, " +
        i +
        " bottles of beer. Take one down, pass it around, " +
        (i - 1) +
        " bottles of beer on the wall."
    );
  } else {
    console.log(
      "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
    );
  }
  i--;
}
