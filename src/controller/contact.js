const Message = require("../models/contact")

exports.sendMessage = async(req,res)=>{
    const ContactMessage = new Message({
        "name":req.body.name,
        "email":req.body.email,
        "message":req.body.message
    })
    await ContactMessage.save()
    res.status(200).send(ContactMessage)

}
exports.GetsingleMessage =  async (req,res)=>{
    try{
    const ContactMessage = await Message.findById(req.params.id)
    res.status(200).json({message:"Message recieved succesfuly",ContactMessage})
    }catch{
        res.status(404).send("message not found")
    }
}
exports.GetAllMessage = async (req,res)=>{
    try{
    const ContactMessage = await Message.find()
    res.status(200).send(ContactMessage)
    }catch{
        res.status(404).send("message not found")
    }
}
exports.DeleteMessage = async (req,res)=>{
    try{
    const ContactMessage = Message.findById(req.params.id)
    await ContactMessage.remove()
    res.status(200).send("message deleted successfully")
    }catch{
        res.status(404).send("message not found")
    }
}