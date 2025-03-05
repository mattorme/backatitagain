import express from "express";

const app = express();
const port = 3000;

// get request
app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = "a weekday";
  let adv = "time to work hard";

  if (day == 0 || day == 6) {
    type = "the weekend";
    adv = "time to partyyyy";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

// server listener
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
