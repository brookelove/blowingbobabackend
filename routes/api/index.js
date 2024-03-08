const router = require("express").Router();
const adminRoutes = require("./adminRoutes");
const cartRoutes = require("./cartRoutes");
const cartItemRoutes = require("./cartItemRoutes");
const customerRoutes = require("./customerRoutes");
const discountRoutes = require("./discountRoutes");
const reviewRoutes = require("./reviewRoutes");
const productRoutes = require("./productRoutes");
const tagRoutes = require("./tagRoutes");
// /api/-> item
router.use("/admin", adminRoutes);
router.use("/cart", cartRoutes);
router.use("/cartItem", cartItemRoutes);
router.use("/me", customerRoutes);
router.use("/discount", discountRoutes);
router.use("/product", productRoutes);
router.use("/review", reviewRoutes);
router.use("/tag", tagRoutes);

module.exports = router;
