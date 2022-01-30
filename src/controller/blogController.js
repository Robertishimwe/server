const Article = require("../models/blog")


// Create article

exports.createArticle = async (req,res)=>{
    const articles = new Article({
        "title":req.body.title,
        "articleBody":req.body.articleBody,
        "ImageLink":req.body.ImageLink

    })
    await articles.save()
    res.status(200).send(articles)
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