const express = require("express");
const userController = require("../controllers/UserController.js");

const router = express.Router();

router.post("/createuser", userController.createUser)
router.get("/viewuser", userController.viewAllUser)
router.get("/viewuser/:id", userController.viewUser)
router.put("/updateuser/:id", userController.updateUser)
router.delete("/deleteuser/:id", userController.deleteUser)

module.exports = router;
