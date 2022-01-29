const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title:{
        type: 'string',
        required: true,
        min:6,
        max: 60

    },
    body:{
        type: 'string',
        required: true,
        min:50,
        max: 3000

    },
    Image:{
        type: 'string',
        default: []
    },
    likes: {
        type: 'Integer',
        default: 0  
    },
    Comments:{
        type: 'Array',
        default: []
    },
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