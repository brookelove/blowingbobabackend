const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/blowing-boba";

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

module.exports = connection;
