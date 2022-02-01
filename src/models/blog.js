// const mongoose = require("mongoose")
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title:{
        type: 'string',
        required: true,
        min:6,
        max: 60

    },
    articleBody:{
        type: 'string',
        required: true,
        max: 3000

    },
    ImageLink:{
        type: 'string',
        
    },
    likes: [],

    Comments: [],
    
    createDate:{
        type: 'date',
        default: Date.now()
    },
    updateDate:{
        type: 'date'
    }
});
const Article =  mongoose.model('Article' , ArticleSchema)

module.exports = Article;