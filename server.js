// const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./config/connection");
const routes = require("./routes/index");
const seedDatabase = require("./utils/seed/seed");

const PORT = process.env.PORT || 3000;

const app = express();

connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// static resources
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes); //All routes including API and Public

// Middleware for handling 404 errors
app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  if (process.env.NODE_ENV !== "production") {
    console.log("Seeding database...");
    seedDatabase();
  }
});
