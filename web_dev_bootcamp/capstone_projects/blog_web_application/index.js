import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let blogId = ["0", "1", "2", "3"];
let blogHeading = ["Heading 1", "Heading 2", "Heading 3", "Heading 4"];
let blogContent = ["Content 1", "Content 2", "Content 3", "Content 4"];


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    blogId: blogId,
    heading: blogHeading,
    content: blogContent
  });
});

app.post("/submit", (req, res) => {
    res.render("index.ejs");
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  