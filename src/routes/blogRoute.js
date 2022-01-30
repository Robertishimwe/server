const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController")

router.post("/articles/create", blogController.createArticle)
router.get("/articles/:id", blogController.getSingleArticle)
router.get("/articles", blogController.getArticleListe)
router.delete("/articles/:id", blogController.deleteArticle)
router.patch("/articles/:id", blogController.updateArticle)

module.exports = router;