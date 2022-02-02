import joi from '@hapi/joi';


//registration validation
const regiserValidation = (reqBody) =>{
const registrationSchema = {
    userName:joi.string().min(4).required(),
    userEmail:joi.string().email().required(),
    userPassword:joi.string().min(4).required(),
    userRole:joi.string()
}
 return joi.validate(reqBody, registrationSchema);
}
module.exports.regiserValidation = regiserValidation;
// login validation

const loginValidation = (reqBody) =>{
    const loginSchema = {
        userEmail:joi.string().email().required(),
        userPassword:joi.string().min(4).required(),
    }
     return joi.validate(reqBody, loginSchema);
    }



module.exports.loginValidation = loginValidation;
