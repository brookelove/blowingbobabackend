const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes); //Public Routes
app.use("/api", routes.api); // API routes

app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
