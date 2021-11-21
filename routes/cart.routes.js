const express = require("express");
const cartController = require("../controllers/CartController.js");

const router = express.Router();

router.post("/createcart", cartController.createCart)
router.get("/viewcart", cartController.viewCart)
router.post("/addcart", cartController.addCart)


module.exports = router;
