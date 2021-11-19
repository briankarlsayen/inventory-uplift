const express = require("express");
const productController = require("../controllers/productController.js");

const router = express.Router();

router.post("/createproduct", productController.createProduct)
router.get("/viewproduct", productController.viewAllProduct)
router.get("/viewproduct/:id", productController.viewProduct)
router.put("/updateproduct/:id", productController.updateProduct)
router.delete("/deleteproduct/:id", productController.deleteProduct)

module.exports = router;
