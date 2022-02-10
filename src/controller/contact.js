// const Message = require("../models/contact")
// const {contactFormValidation} = require("../middleware/contactMiddleware")
// const verify = require("../middleware/authenticator")
// const User = require("../models/user")

import Message from "../models/contact"
import {contactFormValidation} from "../middleware/contactMiddleware"
import User from "../models/users" 


class ContactController{
 static sendMessage = async(req,res)=>{

    const {error} = contactFormValidation(req.body)
    if(error){
        res.status(400).send({Message:error.details[0].message})
    }
    else{

    const ContactMessage = new Message({
        "name":req.body.name.trim(),
        "email":req.body.email.trim(),
        "message":req.body.message.trim()
    })
    await ContactMessage.save()
    res.status(200).send(ContactMessage)

}}

              // view single messages


static GetsingleMessage =  async (req,res)=>{
      //verify if users is admin
     let userId = req.user.id
     const loggedUser = await User.findById(userId);
     const userRole = loggedUser.userRole;

     if(userRole == "user") return res.status(401).send({Message:"you are not allowed to access this page"})
    try{
    const ContactMessage = await Message.findById(req.params.id)
    res.status(200).json({message:"Message recieved succesfuly",ContactMessage})
    }catch{
        res.status(404).send({Message:"message not found"})
    }
}

          // liste of all messages
          
static GetAllMessage = async (req,res)=>{

    //verify if users is admin
     let userId = req.user.id
     const loggedUser = await User.findById(userId);
     const userRole = loggedUser.userRole;

     if(userRole == "user") return res.status(401).send({Message:"you are not allowed to access this page"})


    try{
    const ContactMessage = await Message.find()
    res.status(200).send({ContactMessage})
    }catch{
        res.status(404).send({Message:"message not found"})
    }
}


     //deleting a post     

static DeleteMessage = async (req,res)=>{
      //verify if users is admin
      let userId = req.user.id
      const loggedUser = await User.findById(userId);
      const userRole = loggedUser.userRole;
      if(userRole == "user") return res.status(401).send({Message:"you are not allowed to access this page"})
      
   
    const ContactMessage = Message.findOne({_id:req.params.id})
    try{

    if (!ContactMessage) {
        res.send({ message: "Message not found" });
      } else {





    
    await ContactMessage.remove()
    res.status(204).send({Message:"message deleted successfully"})
    }}catch{
        res.status(404).send({Message:"message not found"})
    }}
}

export default ContactController