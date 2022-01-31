const User = require('../models/users')
const bcrypt = require('bcrypt')
const {regiserValidation, loginValidation} = require("../middleware/usersValidation")




// Create user Controller
exports.createUser = async (req,res)=>{


    const {error} = regiserValidation(req.body)
    if(error){
        res.status(400).send(error.details[0].message)
    }
    else{
    const user = new User({
        "userName":req.body.userName,
        "userEmail":req.body.userEmail,
        "userPassword":req.body.userPassword
    })
    const emailValidation = await User.findOne({userEmail:req.body.userEmail});
    try {

        if(emailValidation){
            res.send("user exist")
        }
        else{
            await user.save()
            res.status(200).send(user)
        }
    } catch (error) {
        res.status(500).send("server error", error)
    }


}
}







 // login controller
    
 exports.login = async (req,res)=>{
 
    const {error} = loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
   
    const email = req.body.userEmail;
    const user = await User.findOne({userEmail:email});
    // res.send(user)
    if(!user){
       return res.send("user not found")
    }
    
    try {
     const userPassword = user.userPassword;
    if(await bcrypt.compare(req.body.userPassword,userPassword)){
    res.send("successfuly loggedin")
    }else{
        res.send("not allowed")
    }
    } catch (error) {
        res.status(500).send(error)
    }


}

 exports.findAllUsers = async (req,res)=>{
    const user = await User.find()
    res.send(user)
 }
