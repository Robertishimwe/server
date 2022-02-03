// const Article = require("../models/blog");
// const { articleValidation } = require("../middleware/blogValidation");
// const User = require("../models/users");
// const { required } = require("@hapi/joi");
import Article from "../models/blog";
import { articleValidation } from "../middleware/blogValidation";
import User from "../models/users";






// Create article
class BlogController {
  static createArticle = async (req, res) => {
    //verify if users is admin
    let userId = req.user.id;
    const loggedUser = await User.findById(userId);
    const userRole = loggedUser.userRole;
    if (userRole == "user")
      return res.status(401).send("you are not allowed to access this page");

    const { error } = articleValidation(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      const articles = new Article({
        title: req.body.title.trim(),
        articleBody: req.body.articleBody.trim(),
        ImageLink: req.body.ImageLink.trim(),
      });
      await articles.save();
      res.status(200).send(articles);
    }
  };
  // retrive single article
  static getSingleArticle = async (req, res) => {
    const articles = await Article.findById(req.params.id);
    res.status(200).json({ message: "liste of all articles", articles });
  };

  //retrive liste of all articles
  static getArticleListe = async (req, res) => {
    const articles = await Article.find();
    res.send(articles);
  };

  //Delete article

  static deleteArticle = async (req, res) => {
    //verify if users is admin
    let userId = req.user.id;
    const loggedUser = await User.findById(userId);
    const userRole = loggedUser.userRole;
    if (userRole == "user")
      return res.status(401).send("you are not allowed to access this page");

    const articles = await Article.findById(req.params.id);
    try {
      if (!articles) {
        res.send({ message: "Article not found" });
      } else {
        await articles.remove();
        res.status(200).json({ message: "articles was deleted succesfuly" });
      }
    } catch (error) {
      res.send(error);
    }
  };

  //update article

  static updateArticle = async (req, res) => {
    //verify if users is admin
    let userId = req.user.id;
    const loggedUser = await User.findById(userId);
    const userRole = loggedUser.userRole;
    if (userRole == "user")
      return res.status(401).send("you are not allowed to access this page");

    const articles = await Article.findById(req.params.id);
    try {
      if (!articles) {
        res.send({ message: "Article not found" });
      } else {
        Object.assign(articles, req.body);
        await articles.save();
        res.status(200).json({ message: "articles was update succesfuly" });
      }
    } catch (error) {
      res.send(error);
    }
  };

  static comments = async (req, res) => {
    const articles = await Article.findById(req.params.id);

    try {
      if (!articles) {
        res.send({ message: "Article not found" });
      } else {
        let userId = req.user.id;
        const loggedUser = await User.findById(userId);
        const userName = loggedUser.userName;

        const newComment = { USERNAME: userName, COMMENT: req.body.comments };
        const oldComments = articles.Comments;
        oldComments.push(newComment);

        Object.assign(articles, oldComments);
        await articles.save();
        res.status(200).json(articles);
      }
    } catch (error) {
      res.send(error);
    }
  };

  static likes = async (req, res) => {
    const articles = await Article.findById(req.params.id);

    try {
      if (!articles) {
        res.send({ message: "Article not found" });
      } else {
        let userId = req.user.id;
        let oldLike = articles.likes;
        for (let i = 0; i <= oldLike.length; i++) {
          if (userId == oldLike[i]) return res.send("Already liked");
        }

        oldLike.push(userId);
        Object.assign(articles, oldLike);
        await articles.save();
        res.status(200).json(articles);
      }
    } catch (error) {
      res.send(error);
    }
  };
}
export default BlogController;
