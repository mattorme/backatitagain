// import express
import express from "express";
const app = express();

// port
const port = 3000;

// server listener
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// get request
app.get("/", (req, res) => {
  res.send("Hello world");
});
