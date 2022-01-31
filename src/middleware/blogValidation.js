//validation
const joi = require('@hapi/joi');


//article validation
const articleValidation = (reqBody) =>{
const articleSchema = {
    title:joi.string().trim().min(6).required(),
    articleBody:joi.string().trim().required(),
    ImageLink:joi.string().trim().min(4).required(),
}
 return joi.validate(reqBody, articleSchema);
}
module.exports.articleValidation = articleValidation;


