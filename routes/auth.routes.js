const express = require("express");
const authController = require("../controllers/AuthController.js");

const router = express.Router();

router.post("/register", authController.registerAuth)
router.post("/login", authController.loginAuth)

module.exports = router;
