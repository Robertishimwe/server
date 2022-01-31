//validation
const Joi = require('@hapi/joi');
const joi = require('@hapi/joi');


//registration validation
const regiserValidation = (reqBody) =>{
const registrationSchema = {
    userName:joi.string().trim().min(4).required(),
    userEmail:joi.string().trim().email().required(),
    userPassword:joi.string().trim().min(4).required(),
    userRole:Joi.string()
}
 return joi.validate(reqBody, registrationSchema);
}
module.exports.regiserValidation = regiserValidation;
// login validation

const loginValidation = (reqBody) =>{
    const loginSchema = {
        userEmail:joi.string().trim().email().required(),
        userPassword:joi.string().trim().min(4).required(),
    }
     return joi.validate(reqBody, loginSchema);
    }



module.exports.loginValidation = loginValidation;
