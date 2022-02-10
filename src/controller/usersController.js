// const User = require('../models/users')
// const jwt = require("jsonwebtoken")
// const bcrypt = require('bcrypt')
// const {regiserValidation, loginValidation} = require("../middleware/usersValidation")
// import { from } from 'formidable/src/parsers/Dummy'
import User from "../models/users"
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
import {regiserValidation, loginValidation} from "../middleware/usersValidation";


class UserController{

// Create user Controller
 static createUser = async (req,res)=>{


    const {error} = regiserValidation(req.body)
    if(error){
        res.status(400).send(error.details[0].message)
    }
    else{
    const user = new User({
        "userName":req.body.userName.trim(),
        "userEmail":req.body.userEmail.trim(),
        "userPassword":req.body.userPassword.trim()
    })
    const emailValidation = await User.findOne({userEmail:req.body.userEmail});
    try {

        if(emailValidation){
            res.send({Message:"User already exist"})
        }
        else{
            await user.save()
            res.status(200).send({Message:"Account created successfully"})
        }
    } catch (error) {
        res.status(500).send({Message:"server error",error})
    }


}
}







 // login controller
    
 static login = async (req,res)=>{
 
    const {error} = loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
   
    const email = req.body.userEmail;
    const user = await User.findOne({userEmail:email});
    // res.send(user)
    if(!user){
       return res.status(404).send({Message:"User not found"})
    }
    
    try {
     const userPassword = user.userPassword;
    if(await bcrypt.compare(req.body.userPassword,userPassword)){
        const token = jwt.sign({id:user._id}, process.env.TOKEN_SECRET)


    
   const userRole = user.userRole;
   if(userRole == "admin") return res.set("authantication", token).send({Message:"Logged in as admin",authantication:token})
   if(userRole == "user") return res.set("authantication", token).send({Message:"Logged in as user",authantication:token})

        //admin validation

        // res.set("authantication", token).send(userId)
        //
    // res.send("successfuly loggedin")
    }else{
        res.status(401).send({Message:"Invalid username or password"})
    }
    } catch (error) {
        res.status(500).send(error)
    }


}













 static findAllUsers = async (req,res)=>{

    let userId = req.user.id
    const loggedUser = await User.findById(userId);
    const userRole = loggedUser.userRole;
    if(userRole == "user") return res.status(401).send({Message:"you are not allowed to access this page"})


    const user = await User.find()
    res.send(user)
 }
}
export default UserController;