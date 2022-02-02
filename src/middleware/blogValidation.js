//validation
// const joi = require('@hapi/joi');
import joi from '@hapi/joi';


//article validation
const articleValidation = (reqBody) =>{
const articleSchema = {
    title:joi.string().min(6).required(),
    articleBody:joi.string().required(),
    ImageLink:joi.string().min(4).required(),
}
 return joi.validate(reqBody, articleSchema);
}
module.exports.articleValidation = articleValidation;


