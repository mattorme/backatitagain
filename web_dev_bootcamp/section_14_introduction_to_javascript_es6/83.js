var tweet = prompt("Compose your tweet: ");
var tweetCount = tweet.length;
var tweetCountRemaining = 140 - tweetCount;

console.log(
  "You have written " +
    tweetCount +
    " characters, you have " +
    tweetCountRemaining +
    " left"
);
