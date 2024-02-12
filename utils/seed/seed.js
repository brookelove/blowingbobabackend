// Import necessary modules
const mongoose = require("mongoose");
const Admin = require("../../models/Admin");
const Customer = require("../../models/Customer");
const Product = require("../../models/Products");
const Tag = require("../../models/Tags");
const adminData = require("./adminData.json");
const customerData = require("./customerData.json");
const productData = require("./productData.json");
const tagData = require("./tagData.json");

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/blowing-boba", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Seed Admins
    await seedCollection(Admin, adminData, "admins");
    // Seed Customers
    await seedCollection(Customer, customerData, "customers");
    // Seed Products
    await seedCollection(Product, productData, "products");
    // Seed Tags
    await seedCollection(Tag, tagData, "tags");

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Close MongoDB connection
    await mongoose.disconnect();
  }
};

// Function to seed a collection
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

// module.exports = seedDatabase;
seedDatabase()
  .then(() => {
    console.log("Database seeded successfully.");
    mongoose.disconnect();
  })
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  });
