const Article = require("../models/blog")
const {articleValidation} = require("../middleware/blogValidation")
const User = require("../models/users")



// Create article

exports.createArticle = async (req,res)=>{

    //verify if users is admin
    let userId = req.user.id
    const loggedUser = await User.findById(userId);
    const userRole = loggedUser.userRole;
    if(userRole == "user") return res.status(401).send("you are not allowed to access this page")


    const {error} = articleValidation(req.body)
    if(error){
        res.status(400).send(error.details[0].message)
    }
    else{
    const articles = new Article({
        "title":req.body.title,
        "articleBody":req.body.articleBody,
        "ImageLink":req.body.ImageLink

    })
    await articles.save()
    res.status(200).send(articles)
}

}
// retrive single article
exports.getSingleArticle =  async (req,res)=>{
    const articles = await Article.findById(req.params.id)
    res.status(200).json({message:"liste of all articles",articles})
}



//retrive liste of all articles
exports.getArticleListe =  async (req,res)=>{
    const articles = await Article.find()
    res.send(articles)

}

//Delete article

exports.deleteArticle = async (req,res)=>{


  //verify if users is admin
  let userId = req.user.id
  const loggedUser = await User.findById(userId);
  const userRole = loggedUser.userRole;
  if(userRole == "user") return res.status(401).send("you are not allowed to access this page")


    const articles = await Article.findById(req.params.id)
    try {
        if(!articles){
            res.send({message:"Article not found"})
        }
        else{
           await articles.remove()
            res.status(200).json({message:"articles was deleted succesfuly"})
        }
    } catch (error) {
        res.send(error)
    }


   
}


//update article

exports.updateArticle = async (req,res)=>{

      //verify if users is admin
      let userId = req.user.id
      const loggedUser = await User.findById(userId);
      const userRole = loggedUser.userRole;
      if(userRole == "user") return res.status(401).send("you are not allowed to access this page")

    const articles = await Article.findById(req.params.id)
    try {
        if(!articles){
            res.send({message:"Article not found"})
        }
        else{
          Object.assign(articles, req.body)
            await articles.save()
            res.status(200).json({message:"articles was update succesfuly"})
        }
    } catch (error) {
        res.send(error)
    }
    

   
}
