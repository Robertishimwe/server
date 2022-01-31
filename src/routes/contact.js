const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact")
const verify = require("../middleware/authenticator")

router.post("/contact", contactController.sendMessage)
router.get("/contact",verify, contactController.GetAllMessage)
router.get("/contact/:id",contactController.GetsingleMessage)
router.delete("/contact/:id",contactController.DeleteMessage)

module.exports = router;