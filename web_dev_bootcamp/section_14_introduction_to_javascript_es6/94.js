function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.

  var daysLived = age * 365;
  var weeksLived = age * 52;
  var monthsLived = age * 12;

  var totalDays = 90 * 365;
  var totalWeeks = 90 * 52;
  var totalMonths = 90 * 12;

  console.log(
    "You have " +
      (totalDays - daysLived) +
      " days, " +
      (totalWeeks - weeksLived) +
      " weeks, " +
      (totalMonths - monthsLived) +
      " months left."
  );

  /*************Don't change the code below**********/
}
