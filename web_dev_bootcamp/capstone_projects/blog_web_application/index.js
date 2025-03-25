import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let blogId = [];
let blogHeading = [];
let blogContent = [];


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(blogId);
  res.render("index.ejs", {
    blogId: blogId,
    heading: blogHeading,
    content: blogContent
  });
});

app.post("/submit", (req, res) => {
  let id = blogId.length + 1;  // Increment ID for new post
  let heading = req.body.heading;
  let content = req.body.content;

  // Add the new post data to the arrays
  blogId.push(id);
  blogHeading.push(heading);
  blogContent.push(content);

  // After submitting the new post, redirect to the homepage
  res.redirect('/');

  });

  app.post("/delete", (req, res) => {
    let id = req.body.blogId;
    console.log("Deleting blogId: ", id);
    
    // Ensure that the id is a number (since blogId is a number array)
    let index = blogId.indexOf(Number(id)); // Find the index of the blogId in the array

    if (index !== -1) {
        // If the id is found, remove it from all arrays (blogId, blogHeading, and blogContent)
        blogId.splice(index, 1);
        blogHeading.splice(index, 1);
        blogContent.splice(index, 1);
    }

    // After deleting the blog post, redirect to the homepage
    res.redirect('/');
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  