const User = require('../models/users')

exports.createUser = async (req,res)=>{

    const user = new User({
        "userName":req.body.userName,
        "userEmail":req.body.userEmail,
        "userPassword":req.body.userPassword
    })
    await user.save()
    res.status(200).send(user)

}
exports.findAllUsers = async (req,res)=>{
    const user = await User.find()
    res.send(user)
}