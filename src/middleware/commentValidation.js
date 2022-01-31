const commentValidation = (reqBody) =>{
    const CommentSchema = {
        userEmail:joi.string().trim().min(3).required(),
    }
     return joi.validate(reqBody, CommentSchema);
    }



module.exports.commentValidation = commentValidation;
