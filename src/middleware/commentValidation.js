const commentValidation = (reqBody) =>{
    const CommentSchema = {
        userEmail:joi.string().min(3).required(),
    }
     return joi.validate(reqBody, CommentSchema);
    }



module.exports.commentValidation = commentValidation;
