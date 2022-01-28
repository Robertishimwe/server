const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact")

router.post("/contact", contactController.sendMessage)
router.get("/contact", contactController.GetAllMessage)
router.get("/contact/:id",contactController.GetsingleMessage)
router.delete("/contact/:id",contactController.DeleteMessage)

module.exports = router;