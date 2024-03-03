// const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./config/connection");
const routes = require("./routes/index");
// const seedDatabase = require("./utils/seed/seed");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// static resources
app.use(express.static(__dirname + "/public"));

// figure out which middleware to use
const formatMiddleware = (req, res, next) => {
  const acceptHeader = req.headers.accept || "";
  if (acceptHeader.includes("application/xml")) {
    res.format({
      xml: function () {
        next();
      },
      json: function () {
        res.status(406).send("Not Acceptable: JSON not supported");
      },
      default: function () {
        res.status(406).send("Not Acceptable: JSON not supported");
      },
    });
  } else {
    next();
  }
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(formatMiddleware);

// app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes); //All routes including API and Public

// Middleware for handling 404 errors
app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  // if the item is not in production mode then run seed script
  // if (process.env.NODE_ENV !== "production") {
  //   console.log("Seeding database...");
  //   if (process.env.SEED_DB === "true") {
  //     await seedDatabase();
  //     console.log("Database seeding completed.");
  //   } else {
  //     console.log("Skipping database seeding.");
  //   }
  // }
});
