const User = require('../models/users')
const bcrypt = require('bcrypt')
const LoginSchema = require("../middleware/usersValidation")

exports.createUser = async (req,res)=>{

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

exports.login = async (req,res)=>{
    const email = req.body.userEmail;
    const user = await User.findOne({userEmail:email});
    // res.send(user)
    if(!user){
       return res.send("user not found")
    }
    
    try {
     const userPassword = user[0].userPassword;
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