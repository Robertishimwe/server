const express = require("express");
const router = express.Router();
const userController = require("../controller/usersController")

router.post("/user/register", userController.createUser)
router.get("/user",userController.findAllUsers)
router.post("/user/login",userController.login)

module.exports = router;