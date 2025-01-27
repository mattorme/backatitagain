function isLeap(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else if (year % 4 == 0 && year % 100 == 0) {
    return false;
  } else if (year % 4 != 0) {
    return false;
  }
}

console.log(isLeap(1904));
