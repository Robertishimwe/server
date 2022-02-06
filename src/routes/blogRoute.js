// const express = require("express");
// const verify = require("../middleware/authenticator")
// const blogController = require("../controller/blogController")

import express from "express";
import verify from "../middleware/authenticator"
import BlogController from "../controller/blogController"
const router = express.Router();






router.post("/articles/create",verify, BlogController.createArticle)

router.get("/articles/:id", BlogController.getSingleArticle)
router.get("/articles", BlogController.getArticleListe)
router.delete("/articles/:id",verify, BlogController.deleteArticle)
router.patch("/articles/:id",verify, BlogController.updateArticle)
router.patch("/articles/comments/:id",verify,BlogController.comments)
router.patch("/articles/like/:id",verify,BlogController.likes)

module.exports = router;