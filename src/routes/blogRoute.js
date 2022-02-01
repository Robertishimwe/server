const express = require("express");
const router = express.Router();
const verify = require("../middleware/authenticator")
const blogController = require("../controller/blogController")

router.post("/articles/create",verify, blogController.createArticle)
router.get("/articles/:id", blogController.getSingleArticle)
router.get("/articles", blogController.getArticleListe)
router.delete("/articles/:id",verify, blogController.deleteArticle)
router.patch("/articles/:id",verify, blogController.updateArticle)
router.patch("/articles/comments/:id",verify,blogController.comments)
router.patch("/articles/like/:id",verify,blogController.likes)

module.exports = router;