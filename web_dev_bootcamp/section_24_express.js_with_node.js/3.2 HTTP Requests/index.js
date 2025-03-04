// import express
import express from "express";

const app = express();

// port
const port = 3000;

// get requests
app.get("/", (req, res) => {
  res.send(
    "<h1>Hellooo</h1><a href='/'>home</a><a href='about'>about</a><a href='contact'>contact</a>"
  );
});

app.get("/about", (req, res) => {
  res.send(
    "<h1>About</h1><a href='/'>home</a><a href='about'>about</a><a href='contact'>contact</a>"
  );
});

app.get("/contact", (req, res) => {
  res.send(
    "<h1>Contact</h1><a href='/'>home</a><a href='about'>about</a><a href='contact'>contact</a>"
  );
});

// server listener
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
