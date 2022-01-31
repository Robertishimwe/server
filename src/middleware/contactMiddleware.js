//validation
const joi = require('@hapi/joi');


//contact form validation
const contactFormValidation = (reqBody) =>{
const contactSchema = {
    name:joi.string().trim().min(4).required(),
    email:joi.string().trim().email().required(),
    message:joi.string().trim().min(4).required(),
}
 return joi.validate(reqBody, contactSchema);
}
module.exports.contactFormValidation = contactFormValidation;

