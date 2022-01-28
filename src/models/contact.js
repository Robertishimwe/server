const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name:{
        type: 'string',
        required: true,
        min:6,
        max: 255

    },
    email:{
        type: 'string',
        required: true,
        min:5,
        max: 40

    },
    message: {
        type: 'string',
        required: true,
        min:5,
        max:150
    },
    timeStamp:{
        type: 'date',
        default: Date.now()
    }
});
const Message =  mongoose.model('Message' , MessageSchema)

module.exports = Message;