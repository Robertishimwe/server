//validation
// const joi = require('@hapi/joi');
import joi from '@hapi/joi';


//contact form validation
const contactFormValidation = (reqBody) =>{
const contactSchema = {
    name:joi.string().min(4).required(),
    email:joi.string().email().required(),
    message:joi.string().min(4).required(),
}
 return joi.validate(reqBody, contactSchema);
}
module.exports.contactFormValidation = contactFormValidation;

