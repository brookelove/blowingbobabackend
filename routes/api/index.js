const router = require("express").Router();
const adminRoutes = require("./adminRoutes");
const cartRoutes = require("./cartRoutes");
const customerRoutes = require("./customerRoutes");
const productRoutes = require("./productRoutes");
const tagRoutes = require("./tagRoutes");
// /api/-> item
router.use("/admin", adminRoutes);
router.use("/cart", cartRoutes);
router.use("/me", customerRoutes);
router.use("/product", productRoutes);
router.use("/tag", tagRoutes);

module.exports = router;
