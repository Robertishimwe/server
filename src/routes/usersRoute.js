const express = require("express");
const router = express.Router();
const userController = require("../controller/usersController")
const verify = require("../middleware/authenticator")

router.post("/user/register", userController.createUser)
router.get("/user",verify,userController.findAllUsers)
router.post("/user/login",userController.login)

module.exports = router;