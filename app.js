const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 80;
const app = express();
const router = express.Router();

// Connecting to Mongoose
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Corsrex");
}

// Define Mongoose Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});
const Contact = mongoose.model("Contact", contactSchema);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});
const User = mongoose.model("User", userSchema);

// Express Specific Things
app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: true }));

// Main Endpoints

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "about.html"));
});

router.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "blog.html"));
});

router.get("/courses", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "course.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "contact.html"));
});

// Other minor routes in a more organized way
const postRoutes = ["post-1", "post-2", "post-3", "post-4"];
postRoutes.forEach((post) => {
  router.get(`/${post}`, (req, res) => {
    res.sendFile(path.join(__dirname, "static", `${post}.html`));
  });
});

router.get("/course-inner", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "course-inner.html"));
});

// Saving Contact Data to the Database
router.post("/contact", (req, res) => {
  var data = new Contact(req.body);
  data
    .save()
    .then((savedData) => {
      console.log(savedData);
      res.send("Message Sent Successfully. You may go back now.");
    })
    .catch(() => {
      res.status(400).send("This item was not saved to the Database.");
    });
});

// res.sendFile(path.join(__dirname, "static", "contact.html"));

router.post("/user", (req, res) => {
  var newData = new User(req.body);
  newData
    .save()
    .then((savedData) => {
      res.send("Your Details has been sent to us. You can go back now.");
      console.log(savedData);
    })
    .catch(() => {
      res.status(400).send("This item was not saved to the Database.");
    });
});

// Register the router
app.use("/", router);

// Running the Server
app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`);
});
