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
    if (!req.user.id)
    return res.status(400).send({Message:"No user with such credentiols"});
    let userId = req.user.id;
    const loggedUser = await User.findById(userId);
    const userRole = loggedUser.userRole;

    if (userRole == "user")
      return res.status(401).send({Message:"you are not allowed to access this page"});


    const { error } = articleValidation(req.body);
    if (error) {
      res.status(400).send({Message:error.details[0].message});
    } else {
      const articles = new Article({
        title: JSON.stringify(req.body.title).trim(),
        articleBody: JSON.stringify(req.body.articleBody).trim(),
        ImageLink: JSON.stringify(req.body.ImageLink).trim(),
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
    const loggedUser = await User.findOne({userId:userId});
    const userRole = loggedUser.userRole;
    if (userRole == "user")
      return res.status(401).send({Message:"you are not allowed to access this page"});

    const articles = await Article.findById(req.params.id);
    try {
      if (!articles) {
        res.status(404).send({ message: "Article not found" });
      } else {
        await articles.remove();
        res.status(204).json({ message: "articles was deleted succesfuly" });
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
      return res.status(401).send({Message:"you are not allowed to access this page"});

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
        const userId = req.user.id;
        const loggedUser = await User.findById(userId);
        const userName = loggedUser.userName;

        const newComment = { userId:userId, username: userName, comment: req.body.comments };
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
          // if (userId == oldLike[i]) return res.send({Message:"Already liked"});

          if (userId == oldLike[i]){
            const indexOfto_be_removed = oldLike.indexOf(userId);
            const toBe_Keeped = oldLike.splice(indexOfto_be_removed,1);
            Object.assign(articles, toBe_Keeped);
            await articles.save();
            return res.status(200).json(articles);
          }
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
