const { header } = require("express/lib/request")
const jwt = require("jsonwebtoken");
const User = require("../models/users");

  module.exports = function(req,res,next){
    const token = req.header("authantication");
    if(!token){
        return res.status(401).send("You are not allowed to access this page")
    }else{
        try {
            const authorized = jwt.verify(token,process.env.TOKEN_SECRET);
            req.user = authorized;
            next();
        } catch (error) {
            res.status.send("invalide token")
        }
    }}
    

