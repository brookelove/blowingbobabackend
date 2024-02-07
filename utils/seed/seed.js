// Import necessary modules
const mongoose = require("mongoose");
const db = require("./config/connection"); // Import your MongoDB connection
const Admin = require("./models/Admin"); // Import your Mongoose models
const Customer = require("./models/Customer");
const Product = require("./models/Products");
const Tag = require("./models/Tags");
// Import data
const adminData = require("./adminData.json");
const customerData = require("./customertData.json");
const productData = require("./productData.json");
const tagData = require("./tagData.json");
// Function to seed the database
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await db.connect();

    // Seed Admins
    await seedCollection(Admin, adminData, "admins");
    // Seed Customers
    await seedCollection(Customer, customerData, "customers");
    // Seed Products
    await seedCollection(Product, productData, "products");
    // Seed Tags
    await seedCollection(Tag, tagData, "tags");

    console.log("Database seeded successfully.");
    await mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};
const seedCollection = async (Model, data, collectionName) => {
  for (const item of data) {
    const existingItem = await Model.findOne(item);
    if (!existingItem) {
      // Insert the item if it doesn't already exist
      await Model.create(item);
    } else {
      console.log(`${collectionName} already contains ${item}`);
    }
  }
};
module.exports = seedDatabase;
